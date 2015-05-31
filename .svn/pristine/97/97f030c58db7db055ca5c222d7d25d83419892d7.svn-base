CFILES=src/convenience/convenience.c  src/librtlsdr.c src/tuner_fc0012.c src/tuner_fc0013.c src/tuner_r82xx.c src/rtl_power.c src/tuner_e4k.c src/tuner_fc2580.c
OFILES=${CFILES:.c=.o}
TARGET=rtl_power

CFLAGS=-I/usr/include/libusb-1.0 -Isrc
LFLAGS=-I/usr/local -L/usr/local -lusb-1.0 -lm

all: ${OFILES}
	gcc -o rtl_power ${OFILES} ${LFLAGS}
	
%.o: %.c
	gcc ${CFLAGS} -c $< -o $@
	
clean:
	rm -rf ${OFILES}
