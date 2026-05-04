const cron = require('node-cron');
const { execSync } = require('child_process');

console.log('\n');
console.log('╔════════════════════════════════════════════════════════╗');
console.log('║           TRANCE NEXUS — SCHEDULER STARTED              ║');
console.log('╚════════════════════════════════════════════════════════╝');
console.log('');

// Daily update at 3:00 AM UTC
cron.schedule('0 3 * * *', () => {
  const now = new Date().toISOString();
  console.log(`\n⏰ [${now}] Daily update triggered`);
  console.log('─────────────────────────────────────────────────────────');
  try {
    execSync('node scrapers/update-all.js', { stdio: 'inherit' });
    console.log('✅ Daily update completed successfully');
  } catch (error) {
    console.error('❌ Daily update failed:', error.message);
  }
});

// Radio update every Friday at 8:00 PM CET (7:00 PM UTC in winter, 6:00 PM in summer)
// Scheduled for UTC 19:00 to catch most timezones
cron.schedule('0 19 * * 5', () => {
  const now = new Date().toISOString();
  console.log(`\n📻 [${now}] Friday radio update triggered (pre-ASOT broadcast)`);
  console.log('─────────────────────────────────────────────────────────');
  try {
    execSync('node scrapers/scrape-radio.js', { stdio: 'inherit' });
    console.log('✅ Friday radio update completed');
  } catch (error) {
    console.error('❌ Friday radio update failed:', error.message);
  }
});

console.log('');
console.log('📅 Cron Jobs Scheduled:');
console.log('  • Daily full update:        03:00 UTC');
console.log('  • Friday radio update:      19:00 UTC (Friday)');
console.log('');
console.log('The scheduler will run continuously. Press Ctrl+C to stop.');
console.log('');
console.log('═══════════════════════════════════════════════════════════');
console.log('');

// Keep the process running
process.on('SIGINT', () => {
  console.log('\n\n╔════════════════════════════════════════════════════════╗');
  console.log('║              SCHEDULER STOPPED GRACEFULLY               ║');
  console.log('╚════════════════════════════════════════════════════════╝');
  process.exit(0);
});

// Handle uncaught errors
process.on('uncaughtException', (error) => {
  console.error('❌ Scheduler error:', error);
  process.exit(1);
});

// Keep process alive indefinitely
setInterval(() => {}, 1000);
