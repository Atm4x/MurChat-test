import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentServer: null,
  currentChannel: null,
  servers: [],
  channels: [],
};

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    setCurrentServer: (state, action) => {
      state.currentServer = action.payload;
    },
    setCurrentChannel: (state, action) => {
      state.currentChannel = action.payload;
    },
    setServers: (state, action) => {
      state.servers = action.payload;
    },
    setChannels: (state, action) => {
      state.channels = action.payload;
    },
  },
});

export const { setCurrentServer, setCurrentChannel, setServers, setChannels } = channelSlice.actions;

export default channelSlice.reducer;