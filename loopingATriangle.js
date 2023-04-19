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

for (let poundString = "#"; poundString.length < 8; poundString += "#") {
	console.log(poundString);
}