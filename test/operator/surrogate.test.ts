import { Mode } from '../../src/mode/mode';
import { newTest } from '../testSimplifier';
import { cleanUpWorkspace, setupWorkspace } from './../testUtils';

suite('surrogate-pair', () => {
  setup(async () => {
    await setupWorkspace();
  });

  teardown(cleanUpWorkspace);

  newTest({
    title: 'yank single hokke',
    start: ['|𩸽'],
    keysPressed: 'vyp',
    end: ['𩸽|𩸽'],
  });

  newTest({
    title: 'move across hokke',
    start: ['|𩸽𩸽𩸽𩸽𩸽'],
    keysPressed: 'lll',
    end: ['𩸽𩸽𩸽|𩸽𩸽'],
  });

  newTest({
    title: 'move and yank triple hokke',
    start: ['|𩸽𩸽𩸽'],
    keysPressed: 'vllyp',
    end: ['𩸽𩸽𩸽|𩸽𩸽𩸽'],
  });

  newTest({
    title: 'yank cute dog and hokke across lines',
    start: ['|𩸽𩸽𩸽🐕🐕🐕', '🐕🐕🐕𩸽𩸽𩸽'],
    keysPressed: 'vjllyP',
    end: ['|𩸽𩸽𩸽🐕🐕🐕', '🐕🐕🐕𩸽𩸽𩸽🐕🐕🐕', '🐕🐕🐕𩸽𩸽𩸽'],
  });
});
