// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100004020207050505050505050505050205040404020202020000000000000000020404040404040200000000060601000204030304040202000000010101010000040606040400000000000101000002000404040000000000000001020000000000000000000000000000000100000000000000000000000000000000020200000000000000000000000000000000000000000000000000000000000000000000000000000000020202020202010000000400000000040400000404020100000004000000000000000404020201020000040404040402020202020202020200000402020202020101010102020205000004020101010101010101020202020508`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 . . . 
. . . . . . . . . . . . . . . . 
. 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . . 2 2 
`, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestOpen,sprites.dungeon.collectibleRedCrystal,sprites.swamp.swampTile7,sprites.builtin.forestTiles0,sprites.dungeon.collectibleBlueCrystal,sprites.builtin.brick], TileScale.Sixteen);
            case "level4":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000303030000000003000003000000000303060300000000060000060000000003060603000000000000000000000000030303030000000000000000000000000303030303000000000000010101000003060603030000000000010606060000030603060300000000000106030306000306030303000000000001060306060003030300000000000000000000000000000000000000000000000000000000000404040404040000000000000000000004000000000000000003000000000000040000000000000000030300000000000400000101010202020202000000000004000001010102020202020202020202040000010105`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 . . . 
. . 2 . . 2 . . . . . 2 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 . . . 
. . . . . 2 2 2 . . . 2 . 2 . . 
. . . . . 2 . . 2 . . 2 . . . . 
. . . . . 2 . 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,sprites.castle.tilePath5,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000000050000000000000000000000000000000202020000020202000202020000000002010200000201020002010200000000000000000000000000000000000202020000000000000000020202000002010200000000000000000201020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003030303030303030303030303030303040404040404040404040404040403040404040404040404040404040404030404040404040404040404040404040300`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,sprites.swamp.swampTile7,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestOpen], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
