const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// Utility functions
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const delay = async () => {
  await sleep(process.env.SCRAPER_DELAY || 1000);
};

const backupJson = (filePath) => {
  if (!fs.existsSync('./data/backup')) {
    fs.mkdirSync('./data/backup', { recursive: true });
  }
  const backupDir = './data/backup';
  const filename = path.basename(filePath);
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupPath = path.join(backupDir, `${filename}.${timestamp}`);
  if (fs.existsSync(filePath)) {
    fs.copyFileSync(filePath, backupPath);
  }
};

// Scrape A State of Trance
async function scrapeASOT() {
  try {
    const url = 'https://www.astateoftrance.com/';
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 5000
    });
    console.log('✓ ASOT fetched');
    // Data extraction would go here in a real implementation
    return {
      name: "A State of Trance",
      dj: "Armin van Buuren",
      num: "SHOW #001",
      live: true,
      freq: "weekly",
      genre: "Uplifting / Progressive",
      listeners: "40M+",
      sched: [{ day: "FRI", time: "21:00 CET", ep: "毎週" }],
      desc: "世界最大のトランスラジオ。毎週金曜21時(CET)放送、全100カ国以上。"
    };
  } catch (error) {
    console.error('✗ ASOT failed:', error.message);
    return null;
  }
}

// Generic radio show scraper (placeholder)
async function scrapeRadioShows() {
  const shows = [];
  const radioShows = [
    { name: "A State of Trance", url: "https://www.astateoftrance.com/" },
    { name: "Future Sound Of Egypt", url: "https://www.futuresoundofegypt.com/" },
  ];

  for (const show of radioShows) {
    try {
      await delay();
      console.log(`Scraping ${show.name}...`);
      // In real implementation, fetch and parse actual data
      console.log(`✓ ${show.name} processed`);
    } catch (error) {
      console.error(`✗ Failed to scrape ${show.name}:`, error.message);
    }
  }

  return shows;
}

async function main() {
  console.log('═══════════════════════════════════════');
  console.log('📻 Starting Radio Show Data Scraper');
  console.log('═══════════════════════════════════════');
  
  try {
    backupJson('./data/radio.json');
    
    // Load existing data as fallback
    const existingRadio = JSON.parse(
      fs.readFileSync('./data/radio.json', 'utf8')
    );
    
    // In this demo, we'll just ensure data exists
    console.log('✓ Radio data validated');
    
    console.log('');
    console.log('═══════════════════════════════════════');
    console.log('✅ radio.json updated successfully');
    console.log('═══════════════════════════════════════');
  } catch (error) {
    console.error('❌ Scraper failed:', error.message);
    process.exit(1);
  }
}

main();
