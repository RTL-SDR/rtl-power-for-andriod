#!/usr/bin/rhino
importPackage(java.io);

function read(file)
{
	var reader = new BufferedReader(new FileReader(arguments[0]));

	var line, ch = [];
	
	for (var i=0; i<256; i++)
		ch.push([i]);
	
	while (line=reader.readLine())
	{
		var p = (line+'').split(', ');
		
		for (var i=0; i<256; i++)
			ch[i].push(parseFloat(p[p.length-256+i]));
	
	}
	
	for (var i=0; i<256; i++)
		print(ch[i].join(' '));

	reader.close();	
}

read(arguments[0]);


