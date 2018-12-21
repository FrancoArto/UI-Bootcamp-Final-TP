import settingsReducer from "../../../app/store/settings/settingsReducer";
import { settingsChanged } from "../../../app/store/settings/settingsActions";

const inputSettings = {
  verified: false,
  following: true,
  defaultInfo: false,
  withLink: true,
  withTruncatedText: false
}



it('should save settings to state', () => {
  expect(settingsReducer(null, settingsChanged(inputSettings))).toEqual(inputSettings)
});