/*
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
*/

let poundString = "";
for (let i = 0; i < 7; i++) {
	poundString += "#";
	console.log(poundString);
}