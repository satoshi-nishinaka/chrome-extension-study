describe('background event registration', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('registers persistent event listeners at module load', async () => {
    const commandListener = jest.fn();
    const installedListener = jest.fn();
    const contextMenuListener = jest.fn();

    global.chrome = {
      commands: {
        onCommand: { addListener: commandListener },
      },
      runtime: {
        onInstalled: { addListener: installedListener },
      },
      contextMenus: {
        create: jest.fn(),
        onClicked: { addListener: contextMenuListener },
      },
      scripting: {
        executeScript: jest.fn(),
      },
      tabs: {
        query: jest.fn(),
        sendMessage: jest.fn(),
      },
    } as unknown as typeof chrome;

    await jest.isolateModulesAsync(async () => {
      await import('../background');
    });

    expect(commandListener).toHaveBeenCalledTimes(1);
    expect(installedListener).toHaveBeenCalledTimes(1);
    expect(contextMenuListener).toHaveBeenCalledTimes(1);
  });
});
