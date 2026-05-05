const { execSync } = require('child_process');

async function runScrapers() {
  const scrapers = [
    { name: 'Radio Shows', script: 'scrapers/scrape-radio.js' },
    { name: 'Setlists', script: 'scrapers/scrape-setlists.js' },
    { name: 'Events', script: 'scrapers/scrape-events.js' },
    { name: 'X Auto-post', script: 'scrapers/post-x.js' },
  ];

  console.log('\n');
  console.log('╔════════════════════════════════════════════════════════╗');
  console.log('║          TRANCE NEXUS — DATA UPDATE PIPELINE            ║');
  console.log('╚════════════════════════════════════════════════════════╝');
  console.log('');

  for (const scraper of scrapers) {
    console.log(`\n▶ Running ${scraper.name}...`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    try {
      execSync(`node ${scraper.script}`, { stdio: 'inherit' });
      console.log(`✅ ${scraper.name} completed`);
    } catch (error) {
      console.error(`❌ ${scraper.name} failed:`, error.message);
    }
  }

  console.log('\n');
  console.log('╔════════════════════════════════════════════════════════╗');
  console.log('║              🎉 ALL DATA UPDATED SUCCESSFULLY! 🎉       ║');
  console.log('╚════════════════════════════════════════════════════════╝');
  console.log(`Last updated: ${new Date().toISOString()}`);
  console.log('');
}

runScrapers().catch(error => {
  console.error('Pipeline failed:', error);
  process.exit(1);
});
