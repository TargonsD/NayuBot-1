class Module {
    constructor (client, name, desc = '', author = 'unknown', ) {
        this.client = client
        this.name = name
        this.desc = desc
        this.author = author
    }
};
class CommandModule extends Module {
    constructor(message, prefix) {

    }
}
class TriggerModule extends Module {
    constructor(message, prefix, triggerEvent) {

    }
}
class BackgroundModule extends Module {
    constructor(message) {

    }
}
console.log('Module:', Module);
module.exports = { Module }