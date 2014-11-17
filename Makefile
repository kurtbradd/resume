all:
	# pdflatex ASS2_WRITTEN.tex
	# pdflatex ass1
	xelatex kurt-dacosta-resume.xtx
	rm -rf *.log *.aux *.out
	