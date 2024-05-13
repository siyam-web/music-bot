module.exports = {
    app: {
        token: 'MTIzODgzODUyOTg3NDcyNjk5Mw.GS2G2y.SiYDEr21dbL7tp18LU5d_iQsWVbzOVjT5VClOs',
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
