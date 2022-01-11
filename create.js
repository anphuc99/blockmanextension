const fs = require("fs")



let json = {}
let property = fs.readFileSync("./property.txt").toString()
property.split("\n").forEach(el => {
    let e = el.replace("\r", "").trim()
    json[e] = {}
    json[e].prefix = e
    json[e].body = [e]
    json[e].description = e
})
property = fs.readFileSync("./property2.txt").toString()
property.split("\n").forEach(el => {
    let e = el.replace("\r", "").trim()
    json[e] = {}
    json[e].prefix = e
    json[e].body = [e]
    json[e].description = e
})

json = {
    ...json,
    "PackageHandlers.registerServerHandler": {
        "prefix": "PackageHandlers.registerServerHandler",
        "body": [
            "PackageHandlers.registerServerHandler(\"ServerTest\", function(player, packet)",
            "    print(player.name, Lib.pv(packet))",
            "end)"
        ],
        "description": "PackageHandlers.registerServerHandler"
    },
    "PackageHandlers.registerClientHandler": {
        "prefix": "PackageHandlers.registerClientHandler",
        "body": [
            "PackageHandlers.registerClientHandler(\"ClientTest\", function(player, packet)",
            "    print(player.name, Lib.pv(packet))",
            "end)"
        ],
        "description": "PackageHandlers.registerClientHandler"
    },
    "Trigger.RegisterHandler": {
        "prefix": "trgRe",
        "body": [
            "Trigger.RegisterHandler(this:cfg(), \"BLOCK_TRIGGER\", function(context)",
            "    print(\"Block trigger !\")",
            "end)"
        ],
        "description": "Trigger.RegisterHandler"
    },
    "Trigger.addHandler": {
        "prefix": "trgAdd",
        "body": [
            "local cancelFunc = Trigger.addHandler(this:cfg(), \"ENTITY_ENTER\", function(context)",
            "    local player = context.obj1",
            "    print(player.name .. \"enter game!\")",
            "end)"
        ],
        "description": "Trigger.addHandler"
    },
    "UI:onOpen": {
        "prefix": "UI:onOpen",
        "body": [
            "function self:onOpen(p)",
            "  print(p)",
            "end"
        ],
        "description": "UI:onOpen"
    }
}

fs.writeFileSync("./sn.json", JSON.stringify(json))