const { TwitterApi } = require('twitter-api-v2');
const fs = require('fs');

const STATE_FILE = './data/x-posted.json';
const SITE_URL = 'https://trance-nexus.com';
const COMMON_TAGS = '#trance #トランス #trancemusic';

function loadState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
  } catch {
    return { postedKeys: [] };
  }
}

function saveState(state) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

function trim280(text) {
  return text.length <= 280 ? text : text.slice(0, 277) + '...';
}

function showHashtags(name) {
  const lower = name.toLowerCase();
  if (lower.includes('state of trance') || lower.includes('asot')) return ' #ASOT #ArminvanBuuren';
  if (lower.includes('future sound') || lower.includes('fsoe')) return ' #FSOE #AlyFila';
  if (lower.includes('dreamstate')) return ' #Dreamstate';
  if (lower.includes('transmission')) return ' #Transmission';
  if (lower.includes('luminosity')) return ' #Luminosity';
  return '';
}

function buildRadioTweets(show) {
  const tags = COMMON_TAGS + showHashtags(show.name) + ' #radioshow';
  const url = `${SITE_URL}/radio`;
  const descSource = show.descJa || show.desc || '';
  const desc = descSource ? descSource.slice(0, 40) : '';

  const jp = trim280(
    `📻 ${show.name} 新エピソード！\n${show.num} | DJ: ${show.dj}\n${desc}\n\n${url}\n\n${tags}`
  );
  const en = trim280(
    `📻 New episode: ${show.name}\n${show.num} | DJ: ${show.dj}\nStream now 🎧\n\n${url}\n\n${tags}`
  );
  return [jp, en];
}

function buildEventTweets(event) {
  const dateStr = `${event.day} ${event.mon} ${event.yr}`;
  const artistList = (event.artists || []).slice(0, 3).join(', ');
  const more = (event.artists || []).length > 3 ? ` +${event.artists.length - 3} more` : '';
  const tags = COMMON_TAGS + showHashtags(event.name) + ' #event';
  const url = `${SITE_URL}/events`;

  const jp = trim280(
    `🎉 トランスイベント情報\n${event.name}\n📅 ${dateStr}\n📍 ${event.venue}\n🎵 ${artistList}${more}\n\n${url}\n\n${tags}`
  );
  const en = trim280(
    `🎉 Trance Event Alert!\n${event.name}\n📅 ${dateStr}\n📍 ${event.venue}\n🎵 ${artistList}${more}\n\n${url}\n\n${tags}`
  );
  return [jp, en];
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function postThread(client, tweets) {
  let replyToId = null;
  for (const text of tweets) {
    const params = replyToId ? { reply: { in_reply_to_tweet_id: replyToId } } : {};
    const result = await client.v2.tweet(text, params);
    replyToId = result.data.id;
    await sleep(2000);
  }
}

async function main() {
  console.log('═══════════════════════════════════════');
  console.log('🐦 X Auto-poster');
  console.log('═══════════════════════════════════════');

  const { X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_TOKEN_SECRET } = process.env;

  if (!X_API_KEY || !X_API_SECRET || !X_ACCESS_TOKEN || !X_ACCESS_TOKEN_SECRET) {
    console.log('⚠ X API credentials not set — skipping');
    return;
  }

  const client = new TwitterApi({
    appKey: X_API_KEY,
    appSecret: X_API_SECRET,
    accessToken: X_ACCESS_TOKEN,
    accessSecret: X_ACCESS_TOKEN_SECRET,
  });

  const state = loadState();
  const radio = JSON.parse(fs.readFileSync('./data/radio.json', 'utf8'));
  const events = JSON.parse(fs.readFileSync('./data/events.json', 'utf8'));
  let posted = 0;

  for (const show of radio) {
    const key = `radio:${show.name}:${show.num}`;
    if (state.postedKeys.includes(key)) continue;
    try {
      await postThread(client, buildRadioTweets(show));
      state.postedKeys.push(key);
      console.log(`✅ Posted: ${show.name} ${show.num}`);
      posted++;
      await sleep(5000);
    } catch (err) {
      console.error(`❌ Failed: ${show.name}:`, err.message);
    }
  }

  for (const event of events) {
    const key = `event:${event.name}:${event.day}${event.mon}${event.yr}`;
    if (state.postedKeys.includes(key)) continue;
    try {
      await postThread(client, buildEventTweets(event));
      state.postedKeys.push(key);
      console.log(`✅ Posted: ${event.name}`);
      posted++;
      await sleep(5000);
    } catch (err) {
      console.error(`❌ Failed: ${event.name}:`, err.message);
    }
  }

  saveState(state);
  console.log(`\n✅ Done. ${posted} new post(s).`);
}

main().catch(err => {
  console.error('X poster failed:', err);
  process.exit(1);
});
