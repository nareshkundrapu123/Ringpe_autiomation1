// @ts-check
import { defineConfig, devices } from '@playwright/test';



export default defineConfig({
  testDir: './tests',
  timeout:60*3000,
  expect:{
    timeout:60*3000
  },
  reporter: 'html',
 

  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
       // viewport: { width: 1920, height: 1080 },
        headless:false,
        screenshot:'on',
        video:'off',
        trace:'on'
       },
    },
    // {
    //   name:'safaro',
    //   use:{
    //     browserName:'webkit',
    //     headless:true,
    //     screenshot:'off',
    //     video:'off',
    //     trace:'on'
    //    ...devices['iphone 11']
    //   }
    // }
  ],
});

