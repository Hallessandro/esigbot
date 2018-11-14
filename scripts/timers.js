module.exports = (robot) => {
    // Description:
    //    Retorna informações sobre os timers
    // 
    // Commands:
    //    hubot qual a situação dos timers da (.*)? - responde a situação
    //
    robot.respond(/(Q|q)ual a situação dos timers da (.*)/, res => {
        res.reply(res.match[1]);
    });

    robot.respond(/olá bot/, res => {
        res.reply("Olá humano!");
    });
}
