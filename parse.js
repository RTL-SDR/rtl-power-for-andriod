#!/usr/bin/rhino
importPackage(java.io);

var fftSize = 256;
var centerWidth = 80;
var sideStart = 20;
var sideWidth = 40;

var threshold = 3;

function avg(array, start, end)
{
	if (start==end)
		return 0;

	var ret = 0;
	for (var i=start; i<=end; i++)
		ret += array[i];
		
	return ret / (end+1-start);
}

function classify(channel, data)
{
	var leftAvg = avg(data, sideStart, sideStart + sideWidth);
	var centerAvg = avg(data, 128 - centerWidth/2, 128 + centerWidth/2);
	var rightAvg = avg(data, 255 - sideStart - sideWidth, 255 - sideStart);
	
	if (rightAvg - centerAvg > threshold)
		print('Channel found:', channel);

	if (leftAvg - centerAvg > threshold)
		print('Channel found:', channel-1);

//	print(leftAvg, centerAvg, rightAvg);
}

function read(file)
{
	var reader = new BufferedReader(new FileReader(arguments[0]));

	var line;
	while (line=reader.readLine())
	{
		var p = (line+'').split(', ');
		
		var freq = (parseInt(p[3], 10) + parseInt(p[2], 10)) / 2;
		var chan = (freq - 302000000) / 8000000;
		print(chan, freq);
		
		// parse as floats
		var data = [];
		for (var i=0; i<256; i++)
			data.push(parseFloat(p[p.length-256+i]));			
		
		classify(chan, data);
	
	}

	reader.close();	
}

read(arguments[0]);


