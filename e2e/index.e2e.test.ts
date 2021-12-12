import {
  exampleText as firstExampleText,
  nextButtonLabel,
} from '@screens/Home';
import {
  exampleText as secondExampleText,
  backButtonLabel,
} from '@screens/Detail';

beforeAll(async () => {
  await device.launchApp();
});

afterAll(async () => {
  await device.reloadReactNative();
});

describe('Example', () => {
  it('should have home screen', async () => {
    await expect(element(by.text(firstExampleText))).toBeVisible();
    await expect(element(by.text(nextButtonLabel))).toBeVisible();
  });

  it('should show detail screen after tap', async () => {
    await expect(element(by.text(firstExampleText))).toBeVisible();
    await expect(element(by.text(nextButtonLabel))).toBeVisible();

    await element(by.text(nextButtonLabel)).tap();

    await expect(element(by.text(secondExampleText))).toBeVisible();
    await expect(element(by.text(backButtonLabel))).toBeVisible();
  });

  it('should show home screen after tap', async () => {
    await expect(element(by.text(secondExampleText))).toBeVisible();
    await expect(element(by.text(backButtonLabel))).toBeVisible();

    await element(by.text(backButtonLabel)).tap();

    await expect(element(by.text(firstExampleText))).toBeVisible();
    await expect(element(by.text(nextButtonLabel))).toBeVisible();
  });
});
