var path = require("path");
module.exports = function(libraryName) {
	return path.join(__dirname, "libraries", libraryName + ".influx");
}
module.exports.list = ["pairs", "maths", "vectors-2d", "lists"];
module.exports.selfTest = function(platform) {
	describe("standard libary self-test", function(){
		var toolchain = require("sunruse-influx-toolchain");
		var fs = require("fs");
		var allLibraries = {};
		for(var i = 0; i < module.exports.list.length; i++) {
			var filename = module.exports.list[i];
			allLibraries[filename] = fs.readFileSync(module.exports(filename), "utf8");
		}

		var tokenized = undefined;
		var exception = undefined;
		
		try {
			tokenized = toolchain.tokenizer(allLibraries);
		} catch(ex) {
			console.log("got exception");
			exception = ex;
		}
		
		it("tokenizes", function(){
			expect(exception).toBeUndefined();
			expect(tokenized).toBeTruthy();
		});
			
		platform.functions = tokenized;
			
		var assertions = undefined;
		
		try {
			assertions = toolchain.runAssertions(platform);
		} catch(ex) {
			exception = ex;
		}
			
		describe("assertions", function(){
			it("runs assertions", function(){
				expect(exception).toBeUndefined();
				expect(assertions).toBeTruthy();
			});
			for(var i = 0; i < module.exports.list.length; i++) {
				(function(i){
					var filename = module.exports.list[i];
					describe(filename, function(){
						for(var j = 0; j < assertions.length; j++) {
							(function(j){
								var assertion = assertions[j];
								if(assertion.assertion.line.filename != filename) return;
								it(assertion.assertion.line.line, function(){
									switch(assertion.resultType) {
										case "successful": return;
										case "failedToCompile": 
											fail("Failed to compile");
											break;
										case "didNotReturnPrimitiveConstant": 
											fail("Did not return a primitive constant");
											break;
										case "primitiveTypeNotAssertable": 
											fail("Returned non-assertable primitive type \"" + assertion.output.primitive.type + "\": " + (JSON.stringify(assertion.output.primitive.value)));
											break;
										case "primitiveValueIncorrect": 
											fail("Returned unexpected primitive value of type \"" + assertion.output.primitive.type + "\": " + (JSON.stringify(assertion.output.primitive.value)) + " whereas " + (JSON.stringify(platform.primitives[assertion.output.primitive.type].assertionPass)) + " was expected");
											break;
										default:
											fail("Unexpected result type \"" + assertion.resultType + "\".");
											break;
									}
								});
							})(j);
						}
					});
				})(i);
			}
		});
	});
}