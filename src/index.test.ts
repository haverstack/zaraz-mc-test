import { MCEvent } from '@managed-components/types';
import { onPageview } from "./index";

describe('Zaraz Managed Component handles Pageview events', () => {
  // arrange
  const executedJS: any[] = [];

  const fakeEvent = new Event('pageview', {}) as MCEvent;
  fakeEvent.client = {
    emitter: 'browser',
    userAgent: '',
    language: 'en-US',
    referer: '',
    ip: '127.0.0.1',
    url: new URL('http://127.0.0.1'),
    fetch: () => undefined,
    set: () => undefined,
    execute: jsString => {
      executedJS.push(jsString)
      return true
    },
    return: () => {},
    get: () => undefined,
    attachEvent: () => {},
    detachEvent: () => {},
  };

  // act
  onPageview(fakeEvent);

  // assert
  it('Client code executed', () => {
    expect(executedJS.length).toBe(1);
    expect(executedJS[0]).toBe("console.log(new Date());");
  });
});
