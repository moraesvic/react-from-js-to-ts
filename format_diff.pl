#!/usr/bin/perl

# This file reads input from Git in the STDIN and converts it to JSX that
# can be used in a React component, taking care of escaping HTML sensitive
# characters from the input, etc.

# Usage: git --no-pager diff file1 file2 | perl format_diff.pl

use strict;
use warnings;

while (<>) {
	# Escape HTML characters

	s/</&lt;/;
	s/>/&gt;/;
	s/{/&#123;/;
	s/}/&#125;/;

	# Apply classes to lines according to their diff semantics
	# The name of the classes used are arbitrary and only need
	# to match the corresponding CSS module

	if ($. <= 5) {
		s#^(.*)$#<p className={styles.header}>$1</p>#;
	}
	elsif ( /^\@\@\s/ ) {
		s#^(.*)$#<p className={styles.lineMarkup}>$1</p>#;
	}
	elsif ( /^\+\s/ ) {
		s#^(.*)$#<p className={styles.addLine}>$1</p>#;
	}
	elsif ( /^-\s/ ) {
		s#^(.*)$#<p className={styles.removeLine}>$1</p>#;
	}
	else {
		s#^(.*)$#<p className={styles.keepLine}>$1</p>#;
	}

	# Render multiple spaces correctly
	s/\s\s/&nbsp;&nbsp;/g;

	print;
}