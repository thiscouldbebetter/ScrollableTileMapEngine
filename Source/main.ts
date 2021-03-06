

function main()
{
	// It may be necessary to clear local storage to prevent errors on
	// deserialization of existing saved items after the schema changes.
	// localStorage.clear();

	var mediaFilePaths = mediaFilePathsBuild();

	var mediaLibrary = MediaLibrary.fromFilePaths(mediaFilePaths);

	var displaySizesAvailable =
	[
		new Coords(400, 300, 1),
		new Coords(640, 480, 1),
		new Coords(800, 600, 1),
		new Coords(1200, 900, 1),
		// Wrap.
		new Coords(200, 150, 1),
	];

	var display = new Display2D
	(
		displaySizesAvailable,
		"Font", // fontName
		10, // fontHeightInPixels
		Color.byName("Gray"), Color.byName("White"), // colorFore, colorBack
		null
	);

	var timerHelper = new TimerHelper(20);

	var controlBuilder = ControlBuilder.default();

	var universe = Universe.create
	(
		"RolePlayingGame",
		"0.0.0-20210428-0200", // version
		timerHelper,
		display,
		mediaLibrary,
		controlBuilder,
		World2.create
	);
	universe.initialize
	(
		() => universe.start()
	);
}

function mediaFilePathsBuild()
{
	var contentDirectoryPath = "../Content/";

	var fontDirectoryPath = contentDirectoryPath + "Fonts/";
	var imageDirectoryPath = contentDirectoryPath + "Images/";
	var soundEffectDirectoryPath = contentDirectoryPath + "Audio/Effects/";
	var soundMusicDirectoryPath = contentDirectoryPath + "Audio/Music/";
	var textStringDirectoryPath = contentDirectoryPath + "Text/";
	var videoDirectoryPath = contentDirectoryPath + "Video/";

	var mediaFilePaths =
	[
		imageDirectoryPath + "Opening.png",
		imageDirectoryPath + "Title.png",

		soundEffectDirectoryPath + "Sound.wav",
		soundEffectDirectoryPath + "Clang.wav",

		soundMusicDirectoryPath + "Music.mp3",
		soundMusicDirectoryPath + "Title.mp3",

		videoDirectoryPath + "Movie.webm",

		fontDirectoryPath + "Font.ttf",

		textStringDirectoryPath + "Conversation.json",
		textStringDirectoryPath + "Instructions.txt",
	];

	return mediaFilePaths;
}
