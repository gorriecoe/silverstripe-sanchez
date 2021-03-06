module.exports = {
	".text.html.ss": {
		"editor": {
			"commentStart": "<%-- ",
			"commentEnd": " --%>",
			"increaseIndentPattern": "<%\\s+(if|else|loop|with|control|cache|uncache)(?!.*<% end_\\1)|<%t|<(?!area|base|br|col|iframe|hr|html|img|input|link|meta|param)([A-Za-z0-9]+)(?!.*<\/\\2)|^\\/>",
			"decreaseIndentPattern": "<%\\s+end_[a-zA-Z]+|else]|<\\/[a-zA-Z]+>"
		}
	}
}
