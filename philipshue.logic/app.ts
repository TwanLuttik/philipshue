import Pulse, { State } from 'pulse-framework';

// creates an instance of Pulse with runtime
export const App = new Pulse({
  framework: React
});

export interface AppState {
  ENVIRONMENT: State;
  PLATFORM: State;
}

export const AppState: AppState = App.StateGroup({
  ENVIRONMENT: 'web', // mobile | web
  PLATFORM: 'web' // ios | android | web
});
