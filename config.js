require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "OTQ4OTQyMzI2Njk5NTI0MTc2.G82pIR.4pzw5UQgxY6ySNHD_LurW_z7At_O-StlRZmlXw",
    clientID: process.env.CLIENT_ID || "948942326699524176", 
    prefix: process.env.PREFIX || "2", 
    ownerID: process.env.OWNER_ID || "921743618316836875",
    SpotifyID: process.env.SPOTIFY_ID || "e6f84fbec2b44a77bf35a20c5ffa54b8",
    SpotifySecret: process.env.SPOTIFY_SECRET || "498f461b962443cfaf9539c610e2ea81",
    mongourl: process.env.MONGO_URL || "mongodb+srv://Kronix1:arjun@cluster0.ob9wwsc.mongodb.net/?retryWrites=true&w=majority",
    embedColor: process.env.EMBED_COLOR || 0xcc0000,
    logs: process.env.LOGS || "1318931051359240192",
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "1318931051359240192",
    buglogschannel: process.env.BUG_LOGS_CHANNEL || "1318931051359240192",
    SearchPlatform: "youtube",
    AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER || "youtube, youtube music, soundcloud",
    links: {
        img: process.env.IMG || '', 
        support: process.env.SUPPORT || '',
        invite: process.env.INVITE || '' 
    },
    nodes: [
        {
            host: process.env.NODE_HOST || "lava.inzeworld.com",
            port: parseInt(process.env.NODE_PORT || "3128"),
            password: process.env.NODE_PASSWORD || "saher.inzeworld.com",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),
        }
    ],
};

function parseBoolean(value) {
    if (typeof value === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
