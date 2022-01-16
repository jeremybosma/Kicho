import color from "chalk";
import readline from "readline";
import Eris from "eris";

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(string) {
    return new Promise((res) => {
        rl.question(string, (answer) => res(answer))
    })
}

async function Kicho() {

    console.log(color.magenta("\n" +
        " ██ ▄█▀ ██▓ ▄████▄   ██░ ██  ▒█████     \n" +
        " ██▄█▒ ▓██▒▒██▀ ▀█  ▓██░ ██▒▒██▒  ██▒   \n" +
        "▓███▄░ ▒██▒▒▓█    ▄ ▒██▀▀██░▒██░  ██▒   \n" +
        "▓██ █▄ ░██░▒▓▓▄ ▄██▒░▓█ ░██ ▒██   ██░   \n" +
        "▒██▒ █▄░██░▒ ▓███▀ ░░▓█▒░██▓░ ████▓▒░   \n" +
        "▒ ▒▒ ▓▒░▓  ░ ░▒ ▒  ░ ▒ ░░▒░▒░ ▒░▒░▒░    \n" +
        "░ ░▒ ▒░ ▒ ░  ░  ▒    ▒ ░▒░ ░  ░ ▒ ▒░    \n" +
        "░ ░░ ░  ▒ ░░         ░  ░░ ░░ ░ ░ ▒     \n" +
        "░  ░    ░  ░ ░       ░  ░  ░    ░ ░     \n" +
        "░  ░    ░  ░ ░       ░  ░  ░    ░ ░     \n" +
        "           ░                            \n" +
        "                                        \n"))

    question(color.redBright('Please specify user token: ')).then(async Results => {

        await Results

        const individual = new Eris(Results, {
            intents: [
                "guildMessages"
            ]
        });

        await individual.connect();

        individual.on("ready", () => {
            console.log(color.magenta(`\n` +
                `User: ${individual.user.username}#${individual.user.discriminator}\n` +
                `Username: ${individual.user.username}\n` +
                `Discriminator: ${individual.user.discriminator}\n` +
                `UserID: ${individual.user.id}\n` +
                `Email: ${individual.user.email}\n` +
                `2FA: ${individual.user.mfaEnabled}\n` +
                `Nitro: ${individual.user.premiumType || "false"}\n` +
                `Avatar: ${individual.user.avatarURL || "default"}\n` +
                `Banner: ${individual.user.bannerURL || individual.user.accentColor || "none"}\n` +
                `System: ${individual.user.system}\n` +
                `Verified: ${individual.user.verified}\n` +
                `PublicFlags: ${individual.user.publicFlags || "none"}\n` +
                "                                        \n"));
        });

        if (console.error) {return}
        if (console.warn) {return}

    })

}
Kicho()