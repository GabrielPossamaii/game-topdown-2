const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Plugins.Keyboard,
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Behaviors.EightDir.Cnds.IsMoving,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetAnim
	];
};
self.C3_JsPropNameTable = [
	{direcao: 0},
	{"8Direções": 0},
	{CentrarEm: 0},
	{RestritoAoLayout: 0},
	{player: 0},
	{Teclado: 0},
	{grama: 0},
	{plantas: 0},
	{objetos: 0},
	{Sólido: 0},
	{solido: 0}
];

self.InstanceType = {
	player: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	grama: class extends self.ITilemapInstance {},
	plantas: class extends self.ITilemapInstance {},
	objetos: class extends self.ITilemapInstance {},
	solido: class extends self.ISpriteInstance {}
}