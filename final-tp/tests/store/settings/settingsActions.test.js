import { settingsChanged, SETTINGS_CHANGED } from "../../../app/store/settings/settingsActions";

let inputSettings = {
  verified: false,
  following: true,
  defaultInfo: false,
  withLink: true,
  withTruncatedText: false
}

it('action should return updated settings', () => {
  const actionOutput = {
    type: SETTINGS_CHANGED,
    payload: inputSettings
  }
  expect(settingsChanged(inputSettings)).toEqual(actionOutput)
});