module.exports = {
    app: {
        token: 'MTIzODgzODUyOTg3NDcyNjk5Mw.GBS2E9.RtOjHdKxGMH1N-Pgrjui4P2sNOwehCPTcehLkQ',
        playing: 'Nothing',
        global: true,
        guild: 'xxx',
        extraMessages: false,
        loopMessage: false,
        lang: 'en'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'bot',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
