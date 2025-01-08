import{u as S,f as y,i as B,r as I,x as U}from"./lit-element-CDYnUiXx.js";var L;(function(e){e[e.EOF=-1]="EOF",e[e.NULL=0]="NULL",e[e.TABULATION=9]="TABULATION",e[e.CARRIAGE_RETURN=13]="CARRIAGE_RETURN",e[e.LINE_FEED=10]="LINE_FEED",e[e.FORM_FEED=12]="FORM_FEED",e[e.SPACE=32]="SPACE",e[e.EXCLAMATION_MARK=33]="EXCLAMATION_MARK",e[e.QUOTATION_MARK=34]="QUOTATION_MARK",e[e.AMPERSAND=38]="AMPERSAND",e[e.APOSTROPHE=39]="APOSTROPHE",e[e.HYPHEN_MINUS=45]="HYPHEN_MINUS",e[e.SOLIDUS=47]="SOLIDUS",e[e.DIGIT_0=48]="DIGIT_0",e[e.DIGIT_9=57]="DIGIT_9",e[e.SEMICOLON=59]="SEMICOLON",e[e.LESS_THAN_SIGN=60]="LESS_THAN_SIGN",e[e.EQUALS_SIGN=61]="EQUALS_SIGN",e[e.GREATER_THAN_SIGN=62]="GREATER_THAN_SIGN",e[e.QUESTION_MARK=63]="QUESTION_MARK",e[e.LATIN_CAPITAL_A=65]="LATIN_CAPITAL_A",e[e.LATIN_CAPITAL_Z=90]="LATIN_CAPITAL_Z",e[e.RIGHT_SQUARE_BRACKET=93]="RIGHT_SQUARE_BRACKET",e[e.GRAVE_ACCENT=96]="GRAVE_ACCENT",e[e.LATIN_SMALL_A=97]="LATIN_SMALL_A",e[e.LATIN_SMALL_Z=122]="LATIN_SMALL_Z"})(L||(L={}));var O;(function(e){e.controlCharacterInInputStream="control-character-in-input-stream",e.noncharacterInInputStream="noncharacter-in-input-stream",e.surrogateInInputStream="surrogate-in-input-stream",e.nonVoidHtmlElementStartTagWithTrailingSolidus="non-void-html-element-start-tag-with-trailing-solidus",e.endTagWithAttributes="end-tag-with-attributes",e.endTagWithTrailingSolidus="end-tag-with-trailing-solidus",e.unexpectedSolidusInTag="unexpected-solidus-in-tag",e.unexpectedNullCharacter="unexpected-null-character",e.unexpectedQuestionMarkInsteadOfTagName="unexpected-question-mark-instead-of-tag-name",e.invalidFirstCharacterOfTagName="invalid-first-character-of-tag-name",e.unexpectedEqualsSignBeforeAttributeName="unexpected-equals-sign-before-attribute-name",e.missingEndTagName="missing-end-tag-name",e.unexpectedCharacterInAttributeName="unexpected-character-in-attribute-name",e.unknownNamedCharacterReference="unknown-named-character-reference",e.missingSemicolonAfterCharacterReference="missing-semicolon-after-character-reference",e.unexpectedCharacterAfterDoctypeSystemIdentifier="unexpected-character-after-doctype-system-identifier",e.unexpectedCharacterInUnquotedAttributeValue="unexpected-character-in-unquoted-attribute-value",e.eofBeforeTagName="eof-before-tag-name",e.eofInTag="eof-in-tag",e.missingAttributeValue="missing-attribute-value",e.missingWhitespaceBetweenAttributes="missing-whitespace-between-attributes",e.missingWhitespaceAfterDoctypePublicKeyword="missing-whitespace-after-doctype-public-keyword",e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers="missing-whitespace-between-doctype-public-and-system-identifiers",e.missingWhitespaceAfterDoctypeSystemKeyword="missing-whitespace-after-doctype-system-keyword",e.missingQuoteBeforeDoctypePublicIdentifier="missing-quote-before-doctype-public-identifier",e.missingQuoteBeforeDoctypeSystemIdentifier="missing-quote-before-doctype-system-identifier",e.missingDoctypePublicIdentifier="missing-doctype-public-identifier",e.missingDoctypeSystemIdentifier="missing-doctype-system-identifier",e.abruptDoctypePublicIdentifier="abrupt-doctype-public-identifier",e.abruptDoctypeSystemIdentifier="abrupt-doctype-system-identifier",e.cdataInHtmlContent="cdata-in-html-content",e.incorrectlyOpenedComment="incorrectly-opened-comment",e.eofInScriptHtmlCommentLikeText="eof-in-script-html-comment-like-text",e.eofInDoctype="eof-in-doctype",e.nestedComment="nested-comment",e.abruptClosingOfEmptyComment="abrupt-closing-of-empty-comment",e.eofInComment="eof-in-comment",e.incorrectlyClosedComment="incorrectly-closed-comment",e.eofInCdata="eof-in-cdata",e.absenceOfDigitsInNumericCharacterReference="absence-of-digits-in-numeric-character-reference",e.nullCharacterReference="null-character-reference",e.surrogateCharacterReference="surrogate-character-reference",e.characterReferenceOutsideUnicodeRange="character-reference-outside-unicode-range",e.controlCharacterReference="control-character-reference",e.noncharacterCharacterReference="noncharacter-character-reference",e.missingWhitespaceBeforeDoctypeName="missing-whitespace-before-doctype-name",e.missingDoctypeName="missing-doctype-name",e.invalidCharacterSequenceAfterDoctypeName="invalid-character-sequence-after-doctype-name",e.duplicateAttribute="duplicate-attribute",e.nonConformingDoctype="non-conforming-doctype",e.missingDoctype="missing-doctype",e.misplacedDoctype="misplaced-doctype",e.endTagWithoutMatchingOpenElement="end-tag-without-matching-open-element",e.closingOfElementWithOpenChildElements="closing-of-element-with-open-child-elements",e.disallowedContentInNoscriptInHead="disallowed-content-in-noscript-in-head",e.openElementsLeftAfterEof="open-elements-left-after-eof",e.abandonedHeadElementChild="abandoned-head-element-child",e.misplacedStartTagForHeadElement="misplaced-start-tag-for-head-element",e.nestedNoscriptInHead="nested-noscript-in-head",e.eofInElementThatCanContainOnlyText="eof-in-element-that-can-contain-only-text"})(O||(O={}));var h;(function(e){e[e.CHARACTER=0]="CHARACTER",e[e.NULL_CHARACTER=1]="NULL_CHARACTER",e[e.WHITESPACE_CHARACTER=2]="WHITESPACE_CHARACTER",e[e.START_TAG=3]="START_TAG",e[e.END_TAG=4]="END_TAG",e[e.COMMENT=5]="COMMENT",e[e.DOCTYPE=6]="DOCTYPE",e[e.EOF=7]="EOF",e[e.HIBERNATION=8]="HIBERNATION"})(h||(h={}));var n;(function(e){e.HTML="http://www.w3.org/1999/xhtml",e.MATHML="http://www.w3.org/1998/Math/MathML",e.SVG="http://www.w3.org/2000/svg",e.XLINK="http://www.w3.org/1999/xlink",e.XML="http://www.w3.org/XML/1998/namespace",e.XMLNS="http://www.w3.org/2000/xmlns/"})(n||(n={}));var C;(function(e){e.TYPE="type",e.ACTION="action",e.ENCODING="encoding",e.PROMPT="prompt",e.NAME="name",e.COLOR="color",e.FACE="face",e.SIZE="size"})(C||(C={}));var g;(function(e){e.NO_QUIRKS="no-quirks",e.QUIRKS="quirks",e.LIMITED_QUIRKS="limited-quirks"})(g||(g={}));var i;(function(e){e.A="a",e.ADDRESS="address",e.ANNOTATION_XML="annotation-xml",e.APPLET="applet",e.AREA="area",e.ARTICLE="article",e.ASIDE="aside",e.B="b",e.BASE="base",e.BASEFONT="basefont",e.BGSOUND="bgsound",e.BIG="big",e.BLOCKQUOTE="blockquote",e.BODY="body",e.BR="br",e.BUTTON="button",e.CAPTION="caption",e.CENTER="center",e.CODE="code",e.COL="col",e.COLGROUP="colgroup",e.DD="dd",e.DESC="desc",e.DETAILS="details",e.DIALOG="dialog",e.DIR="dir",e.DIV="div",e.DL="dl",e.DT="dt",e.EM="em",e.EMBED="embed",e.FIELDSET="fieldset",e.FIGCAPTION="figcaption",e.FIGURE="figure",e.FONT="font",e.FOOTER="footer",e.FOREIGN_OBJECT="foreignObject",e.FORM="form",e.FRAME="frame",e.FRAMESET="frameset",e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e.H5="h5",e.H6="h6",e.HEAD="head",e.HEADER="header",e.HGROUP="hgroup",e.HR="hr",e.HTML="html",e.I="i",e.IMG="img",e.IMAGE="image",e.INPUT="input",e.IFRAME="iframe",e.KEYGEN="keygen",e.LABEL="label",e.LI="li",e.LINK="link",e.LISTING="listing",e.MAIN="main",e.MALIGNMARK="malignmark",e.MARQUEE="marquee",e.MATH="math",e.MENU="menu",e.META="meta",e.MGLYPH="mglyph",e.MI="mi",e.MO="mo",e.MN="mn",e.MS="ms",e.MTEXT="mtext",e.NAV="nav",e.NOBR="nobr",e.NOFRAMES="noframes",e.NOEMBED="noembed",e.NOSCRIPT="noscript",e.OBJECT="object",e.OL="ol",e.OPTGROUP="optgroup",e.OPTION="option",e.P="p",e.PARAM="param",e.PLAINTEXT="plaintext",e.PRE="pre",e.RB="rb",e.RP="rp",e.RT="rt",e.RTC="rtc",e.RUBY="ruby",e.S="s",e.SCRIPT="script",e.SEARCH="search",e.SECTION="section",e.SELECT="select",e.SOURCE="source",e.SMALL="small",e.SPAN="span",e.STRIKE="strike",e.STRONG="strong",e.STYLE="style",e.SUB="sub",e.SUMMARY="summary",e.SUP="sup",e.TABLE="table",e.TBODY="tbody",e.TEMPLATE="template",e.TEXTAREA="textarea",e.TFOOT="tfoot",e.TD="td",e.TH="th",e.THEAD="thead",e.TITLE="title",e.TR="tr",e.TRACK="track",e.TT="tt",e.U="u",e.UL="ul",e.SVG="svg",e.VAR="var",e.WBR="wbr",e.XMP="xmp"})(i||(i={}));var t;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.A=1]="A",e[e.ADDRESS=2]="ADDRESS",e[e.ANNOTATION_XML=3]="ANNOTATION_XML",e[e.APPLET=4]="APPLET",e[e.AREA=5]="AREA",e[e.ARTICLE=6]="ARTICLE",e[e.ASIDE=7]="ASIDE",e[e.B=8]="B",e[e.BASE=9]="BASE",e[e.BASEFONT=10]="BASEFONT",e[e.BGSOUND=11]="BGSOUND",e[e.BIG=12]="BIG",e[e.BLOCKQUOTE=13]="BLOCKQUOTE",e[e.BODY=14]="BODY",e[e.BR=15]="BR",e[e.BUTTON=16]="BUTTON",e[e.CAPTION=17]="CAPTION",e[e.CENTER=18]="CENTER",e[e.CODE=19]="CODE",e[e.COL=20]="COL",e[e.COLGROUP=21]="COLGROUP",e[e.DD=22]="DD",e[e.DESC=23]="DESC",e[e.DETAILS=24]="DETAILS",e[e.DIALOG=25]="DIALOG",e[e.DIR=26]="DIR",e[e.DIV=27]="DIV",e[e.DL=28]="DL",e[e.DT=29]="DT",e[e.EM=30]="EM",e[e.EMBED=31]="EMBED",e[e.FIELDSET=32]="FIELDSET",e[e.FIGCAPTION=33]="FIGCAPTION",e[e.FIGURE=34]="FIGURE",e[e.FONT=35]="FONT",e[e.FOOTER=36]="FOOTER",e[e.FOREIGN_OBJECT=37]="FOREIGN_OBJECT",e[e.FORM=38]="FORM",e[e.FRAME=39]="FRAME",e[e.FRAMESET=40]="FRAMESET",e[e.H1=41]="H1",e[e.H2=42]="H2",e[e.H3=43]="H3",e[e.H4=44]="H4",e[e.H5=45]="H5",e[e.H6=46]="H6",e[e.HEAD=47]="HEAD",e[e.HEADER=48]="HEADER",e[e.HGROUP=49]="HGROUP",e[e.HR=50]="HR",e[e.HTML=51]="HTML",e[e.I=52]="I",e[e.IMG=53]="IMG",e[e.IMAGE=54]="IMAGE",e[e.INPUT=55]="INPUT",e[e.IFRAME=56]="IFRAME",e[e.KEYGEN=57]="KEYGEN",e[e.LABEL=58]="LABEL",e[e.LI=59]="LI",e[e.LINK=60]="LINK",e[e.LISTING=61]="LISTING",e[e.MAIN=62]="MAIN",e[e.MALIGNMARK=63]="MALIGNMARK",e[e.MARQUEE=64]="MARQUEE",e[e.MATH=65]="MATH",e[e.MENU=66]="MENU",e[e.META=67]="META",e[e.MGLYPH=68]="MGLYPH",e[e.MI=69]="MI",e[e.MO=70]="MO",e[e.MN=71]="MN",e[e.MS=72]="MS",e[e.MTEXT=73]="MTEXT",e[e.NAV=74]="NAV",e[e.NOBR=75]="NOBR",e[e.NOFRAMES=76]="NOFRAMES",e[e.NOEMBED=77]="NOEMBED",e[e.NOSCRIPT=78]="NOSCRIPT",e[e.OBJECT=79]="OBJECT",e[e.OL=80]="OL",e[e.OPTGROUP=81]="OPTGROUP",e[e.OPTION=82]="OPTION",e[e.P=83]="P",e[e.PARAM=84]="PARAM",e[e.PLAINTEXT=85]="PLAINTEXT",e[e.PRE=86]="PRE",e[e.RB=87]="RB",e[e.RP=88]="RP",e[e.RT=89]="RT",e[e.RTC=90]="RTC",e[e.RUBY=91]="RUBY",e[e.S=92]="S",e[e.SCRIPT=93]="SCRIPT",e[e.SEARCH=94]="SEARCH",e[e.SECTION=95]="SECTION",e[e.SELECT=96]="SELECT",e[e.SOURCE=97]="SOURCE",e[e.SMALL=98]="SMALL",e[e.SPAN=99]="SPAN",e[e.STRIKE=100]="STRIKE",e[e.STRONG=101]="STRONG",e[e.STYLE=102]="STYLE",e[e.SUB=103]="SUB",e[e.SUMMARY=104]="SUMMARY",e[e.SUP=105]="SUP",e[e.TABLE=106]="TABLE",e[e.TBODY=107]="TBODY",e[e.TEMPLATE=108]="TEMPLATE",e[e.TEXTAREA=109]="TEXTAREA",e[e.TFOOT=110]="TFOOT",e[e.TD=111]="TD",e[e.TH=112]="TH",e[e.THEAD=113]="THEAD",e[e.TITLE=114]="TITLE",e[e.TR=115]="TR",e[e.TRACK=116]="TRACK",e[e.TT=117]="TT",e[e.U=118]="U",e[e.UL=119]="UL",e[e.SVG=120]="SVG",e[e.VAR=121]="VAR",e[e.WBR=122]="WBR",e[e.XMP=123]="XMP"})(t||(t={}));i.A,t.A,i.ADDRESS,t.ADDRESS,i.ANNOTATION_XML,t.ANNOTATION_XML,i.APPLET,t.APPLET,i.AREA,t.AREA,i.ARTICLE,t.ARTICLE,i.ASIDE,t.ASIDE,i.B,t.B,i.BASE,t.BASE,i.BASEFONT,t.BASEFONT,i.BGSOUND,t.BGSOUND,i.BIG,t.BIG,i.BLOCKQUOTE,t.BLOCKQUOTE,i.BODY,t.BODY,i.BR,t.BR,i.BUTTON,t.BUTTON,i.CAPTION,t.CAPTION,i.CENTER,t.CENTER,i.CODE,t.CODE,i.COL,t.COL,i.COLGROUP,t.COLGROUP,i.DD,t.DD,i.DESC,t.DESC,i.DETAILS,t.DETAILS,i.DIALOG,t.DIALOG,i.DIR,t.DIR,i.DIV,t.DIV,i.DL,t.DL,i.DT,t.DT,i.EM,t.EM,i.EMBED,t.EMBED,i.FIELDSET,t.FIELDSET,i.FIGCAPTION,t.FIGCAPTION,i.FIGURE,t.FIGURE,i.FONT,t.FONT,i.FOOTER,t.FOOTER,i.FOREIGN_OBJECT,t.FOREIGN_OBJECT,i.FORM,t.FORM,i.FRAME,t.FRAME,i.FRAMESET,t.FRAMESET,i.H1,t.H1,i.H2,t.H2,i.H3,t.H3,i.H4,t.H4,i.H5,t.H5,i.H6,t.H6,i.HEAD,t.HEAD,i.HEADER,t.HEADER,i.HGROUP,t.HGROUP,i.HR,t.HR,i.HTML,t.HTML,i.I,t.I,i.IMG,t.IMG,i.IMAGE,t.IMAGE,i.INPUT,t.INPUT,i.IFRAME,t.IFRAME,i.KEYGEN,t.KEYGEN,i.LABEL,t.LABEL,i.LI,t.LI,i.LINK,t.LINK,i.LISTING,t.LISTING,i.MAIN,t.MAIN,i.MALIGNMARK,t.MALIGNMARK,i.MARQUEE,t.MARQUEE,i.MATH,t.MATH,i.MENU,t.MENU,i.META,t.META,i.MGLYPH,t.MGLYPH,i.MI,t.MI,i.MO,t.MO,i.MN,t.MN,i.MS,t.MS,i.MTEXT,t.MTEXT,i.NAV,t.NAV,i.NOBR,t.NOBR,i.NOFRAMES,t.NOFRAMES,i.NOEMBED,t.NOEMBED,i.NOSCRIPT,t.NOSCRIPT,i.OBJECT,t.OBJECT,i.OL,t.OL,i.OPTGROUP,t.OPTGROUP,i.OPTION,t.OPTION,i.P,t.P,i.PARAM,t.PARAM,i.PLAINTEXT,t.PLAINTEXT,i.PRE,t.PRE,i.RB,t.RB,i.RP,t.RP,i.RT,t.RT,i.RTC,t.RTC,i.RUBY,t.RUBY,i.S,t.S,i.SCRIPT,t.SCRIPT,i.SEARCH,t.SEARCH,i.SECTION,t.SECTION,i.SELECT,t.SELECT,i.SOURCE,t.SOURCE,i.SMALL,t.SMALL,i.SPAN,t.SPAN,i.STRIKE,t.STRIKE,i.STRONG,t.STRONG,i.STYLE,t.STYLE,i.SUB,t.SUB,i.SUMMARY,t.SUMMARY,i.SUP,t.SUP,i.TABLE,t.TABLE,i.TBODY,t.TBODY,i.TEMPLATE,t.TEMPLATE,i.TEXTAREA,t.TEXTAREA,i.TFOOT,t.TFOOT,i.TD,t.TD,i.TH,t.TH,i.THEAD,t.THEAD,i.TITLE,t.TITLE,i.TR,t.TR,i.TRACK,t.TRACK,i.TT,t.TT,i.U,t.U,i.UL,t.UL,i.SVG,t.SVG,i.VAR,t.VAR,i.WBR,t.WBR,i.XMP,t.XMP;const r=t;n.HTML+"",r.ADDRESS,r.APPLET,r.AREA,r.ARTICLE,r.ASIDE,r.BASE,r.BASEFONT,r.BGSOUND,r.BLOCKQUOTE,r.BODY,r.BR,r.BUTTON,r.CAPTION,r.CENTER,r.COL,r.COLGROUP,r.DD,r.DETAILS,r.DIR,r.DIV,r.DL,r.DT,r.EMBED,r.FIELDSET,r.FIGCAPTION,r.FIGURE,r.FOOTER,r.FORM,r.FRAME,r.FRAMESET,r.H1,r.H2,r.H3,r.H4,r.H5,r.H6,r.HEAD,r.HEADER,r.HGROUP,r.HR,r.HTML,r.IFRAME,r.IMG,r.INPUT,r.LI,r.LINK,r.LISTING,r.MAIN,r.MARQUEE,r.MENU,r.META,r.NAV,r.NOEMBED,r.NOFRAMES,r.NOSCRIPT,r.OBJECT,r.OL,r.P,r.PARAM,r.PLAINTEXT,r.PRE,r.SCRIPT,r.SECTION,r.SELECT,r.SOURCE,r.STYLE,r.SUMMARY,r.TABLE,r.TBODY,r.TD,r.TEMPLATE,r.TEXTAREA,r.TFOOT,r.TH,r.THEAD,r.TITLE,r.TR,r.TRACK,r.UL,r.WBR,r.XMP,n.MATHML+"",r.MI,r.MO,r.MN,r.MS,r.MTEXT,r.ANNOTATION_XML,n.SVG+"",r.TITLE,r.FOREIGN_OBJECT,r.DESC,n.XLINK+"",n.XML+"",n.XMLNS+"";r.H1,r.H2,r.H3,r.H4,r.H5,r.H6;i.STYLE,i.SCRIPT,i.XMP,i.IFRAME,i.NOEMBED,i.NOFRAMES,i.PLAINTEXT;var d;(function(e){e[e.DATA=0]="DATA",e[e.RCDATA=1]="RCDATA",e[e.RAWTEXT=2]="RAWTEXT",e[e.SCRIPT_DATA=3]="SCRIPT_DATA",e[e.PLAINTEXT=4]="PLAINTEXT",e[e.TAG_OPEN=5]="TAG_OPEN",e[e.END_TAG_OPEN=6]="END_TAG_OPEN",e[e.TAG_NAME=7]="TAG_NAME",e[e.RCDATA_LESS_THAN_SIGN=8]="RCDATA_LESS_THAN_SIGN",e[e.RCDATA_END_TAG_OPEN=9]="RCDATA_END_TAG_OPEN",e[e.RCDATA_END_TAG_NAME=10]="RCDATA_END_TAG_NAME",e[e.RAWTEXT_LESS_THAN_SIGN=11]="RAWTEXT_LESS_THAN_SIGN",e[e.RAWTEXT_END_TAG_OPEN=12]="RAWTEXT_END_TAG_OPEN",e[e.RAWTEXT_END_TAG_NAME=13]="RAWTEXT_END_TAG_NAME",e[e.SCRIPT_DATA_LESS_THAN_SIGN=14]="SCRIPT_DATA_LESS_THAN_SIGN",e[e.SCRIPT_DATA_END_TAG_OPEN=15]="SCRIPT_DATA_END_TAG_OPEN",e[e.SCRIPT_DATA_END_TAG_NAME=16]="SCRIPT_DATA_END_TAG_NAME",e[e.SCRIPT_DATA_ESCAPE_START=17]="SCRIPT_DATA_ESCAPE_START",e[e.SCRIPT_DATA_ESCAPE_START_DASH=18]="SCRIPT_DATA_ESCAPE_START_DASH",e[e.SCRIPT_DATA_ESCAPED=19]="SCRIPT_DATA_ESCAPED",e[e.SCRIPT_DATA_ESCAPED_DASH=20]="SCRIPT_DATA_ESCAPED_DASH",e[e.SCRIPT_DATA_ESCAPED_DASH_DASH=21]="SCRIPT_DATA_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN=22]="SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN=23]="SCRIPT_DATA_ESCAPED_END_TAG_OPEN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME=24]="SCRIPT_DATA_ESCAPED_END_TAG_NAME",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START=25]="SCRIPT_DATA_DOUBLE_ESCAPE_START",e[e.SCRIPT_DATA_DOUBLE_ESCAPED=26]="SCRIPT_DATA_DOUBLE_ESCAPED",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH=27]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH=28]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN=29]="SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END=30]="SCRIPT_DATA_DOUBLE_ESCAPE_END",e[e.BEFORE_ATTRIBUTE_NAME=31]="BEFORE_ATTRIBUTE_NAME",e[e.ATTRIBUTE_NAME=32]="ATTRIBUTE_NAME",e[e.AFTER_ATTRIBUTE_NAME=33]="AFTER_ATTRIBUTE_NAME",e[e.BEFORE_ATTRIBUTE_VALUE=34]="BEFORE_ATTRIBUTE_VALUE",e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED=35]="ATTRIBUTE_VALUE_DOUBLE_QUOTED",e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED=36]="ATTRIBUTE_VALUE_SINGLE_QUOTED",e[e.ATTRIBUTE_VALUE_UNQUOTED=37]="ATTRIBUTE_VALUE_UNQUOTED",e[e.AFTER_ATTRIBUTE_VALUE_QUOTED=38]="AFTER_ATTRIBUTE_VALUE_QUOTED",e[e.SELF_CLOSING_START_TAG=39]="SELF_CLOSING_START_TAG",e[e.BOGUS_COMMENT=40]="BOGUS_COMMENT",e[e.MARKUP_DECLARATION_OPEN=41]="MARKUP_DECLARATION_OPEN",e[e.COMMENT_START=42]="COMMENT_START",e[e.COMMENT_START_DASH=43]="COMMENT_START_DASH",e[e.COMMENT=44]="COMMENT",e[e.COMMENT_LESS_THAN_SIGN=45]="COMMENT_LESS_THAN_SIGN",e[e.COMMENT_LESS_THAN_SIGN_BANG=46]="COMMENT_LESS_THAN_SIGN_BANG",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH=47]="COMMENT_LESS_THAN_SIGN_BANG_DASH",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH=48]="COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH",e[e.COMMENT_END_DASH=49]="COMMENT_END_DASH",e[e.COMMENT_END=50]="COMMENT_END",e[e.COMMENT_END_BANG=51]="COMMENT_END_BANG",e[e.DOCTYPE=52]="DOCTYPE",e[e.BEFORE_DOCTYPE_NAME=53]="BEFORE_DOCTYPE_NAME",e[e.DOCTYPE_NAME=54]="DOCTYPE_NAME",e[e.AFTER_DOCTYPE_NAME=55]="AFTER_DOCTYPE_NAME",e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD=56]="AFTER_DOCTYPE_PUBLIC_KEYWORD",e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER=57]="BEFORE_DOCTYPE_PUBLIC_IDENTIFIER",e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED=58]="DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED=59]="DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER=60]="AFTER_DOCTYPE_PUBLIC_IDENTIFIER",e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS=61]="BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS",e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD=62]="AFTER_DOCTYPE_SYSTEM_KEYWORD",e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER=63]="BEFORE_DOCTYPE_SYSTEM_IDENTIFIER",e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED=64]="DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED=65]="DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER=66]="AFTER_DOCTYPE_SYSTEM_IDENTIFIER",e[e.BOGUS_DOCTYPE=67]="BOGUS_DOCTYPE",e[e.CDATA_SECTION=68]="CDATA_SECTION",e[e.CDATA_SECTION_BRACKET=69]="CDATA_SECTION_BRACKET",e[e.CDATA_SECTION_END=70]="CDATA_SECTION_END",e[e.CHARACTER_REFERENCE=71]="CHARACTER_REFERENCE",e[e.AMBIGUOUS_AMPERSAND=72]="AMBIGUOUS_AMPERSAND"})(d||(d={}));d.DATA,d.RCDATA,d.RAWTEXT,d.SCRIPT_DATA,d.PLAINTEXT,d.CDATA_SECTION;const F=new Set([t.DD,t.DT,t.LI,t.OPTGROUP,t.OPTION,t.P,t.RB,t.RP,t.RT,t.RTC]);[...F,t.CAPTION,t.COLGROUP,t.TBODY,t.TD,t.TFOOT,t.TH,t.THEAD,t.TR];const M=new Set([t.APPLET,t.CAPTION,t.HTML,t.MARQUEE,t.OBJECT,t.TABLE,t.TD,t.TEMPLATE,t.TH]);[...M,t.OL,t.UL];[...M,t.BUTTON];t.ANNOTATION_XML,t.MI,t.MN,t.MO,t.MS,t.MTEXT;t.DESC,t.FOREIGN_OBJECT,t.TITLE;t.TR,t.TEMPLATE,t.HTML;t.TBODY,t.TFOOT,t.THEAD,t.TEMPLATE,t.HTML;t.TABLE,t.TEMPLATE,t.HTML;t.TD,t.TH;var R;(function(e){e[e.Marker=0]="Marker",e[e.Element=1]="Element"})(R||(R={}));R.Marker;new Map(["attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map(e=>[e.toLowerCase(),e]));n.XLINK,n.XLINK,n.XLINK,n.XLINK,n.XLINK,n.XLINK,n.XLINK,n.XML,n.XML,n.XMLNS,n.XMLNS;new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map(e=>[e.toLowerCase(),e]));t.B,t.BIG,t.BLOCKQUOTE,t.BODY,t.BR,t.CENTER,t.CODE,t.DD,t.DIV,t.DL,t.DT,t.EM,t.EMBED,t.H1,t.H2,t.H3,t.H4,t.H5,t.H6,t.HEAD,t.HR,t.I,t.IMG,t.LI,t.LISTING,t.MENU,t.META,t.NOBR,t.OL,t.P,t.PRE,t.RUBY,t.S,t.SMALL,t.SPAN,t.STRONG,t.STRIKE,t.SUB,t.SUP,t.TABLE,t.TT,t.U,t.UL,t.VAR;var N;(function(e){e[e.INITIAL=0]="INITIAL",e[e.BEFORE_HTML=1]="BEFORE_HTML",e[e.BEFORE_HEAD=2]="BEFORE_HEAD",e[e.IN_HEAD=3]="IN_HEAD",e[e.IN_HEAD_NO_SCRIPT=4]="IN_HEAD_NO_SCRIPT",e[e.AFTER_HEAD=5]="AFTER_HEAD",e[e.IN_BODY=6]="IN_BODY",e[e.TEXT=7]="TEXT",e[e.IN_TABLE=8]="IN_TABLE",e[e.IN_TABLE_TEXT=9]="IN_TABLE_TEXT",e[e.IN_CAPTION=10]="IN_CAPTION",e[e.IN_COLUMN_GROUP=11]="IN_COLUMN_GROUP",e[e.IN_TABLE_BODY=12]="IN_TABLE_BODY",e[e.IN_ROW=13]="IN_ROW",e[e.IN_CELL=14]="IN_CELL",e[e.IN_SELECT=15]="IN_SELECT",e[e.IN_SELECT_IN_TABLE=16]="IN_SELECT_IN_TABLE",e[e.IN_TEMPLATE=17]="IN_TEMPLATE",e[e.AFTER_BODY=18]="AFTER_BODY",e[e.IN_FRAMESET=19]="IN_FRAMESET",e[e.AFTER_FRAMESET=20]="AFTER_FRAMESET",e[e.AFTER_AFTER_BODY=21]="AFTER_AFTER_BODY",e[e.AFTER_AFTER_FRAMESET=22]="AFTER_AFTER_FRAMESET"})(N||(N={}));t.TABLE,t.TBODY,t.TFOOT,t.THEAD,t.TR;t.CAPTION,t.COL,t.COLGROUP,t.TBODY,t.TD,t.TFOOT,t.TH,t.THEAD,t.TR;i.AREA,i.BASE,i.BASEFONT,i.BGSOUND,i.BR,i.COL,i.EMBED,i.FRAME,i.HR,i.IMG,i.INPUT,i.KEYGEN,i.LINK,i.META,i.PARAM,i.SOURCE,i.TRACK,i.WBR;n.HTML,n.XML,n.MATHML,n.SVG,n.XLINK,n.XMLNS;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=[["accept",["input"]],[["accept-charset","acceptCharset"],["form"]],[["accesskey","accessKey"],["*"]],["action",["form"]],["align",["caption","col","colgroup","hr","iframe","img","table","tbody","td","tfoot","th","thead","tr"]],["allow",["iframe"]],["alt",["area","img","input"]],["async",["script"]],["autocapitalize",["*"]],["autocomplete",["form","input","select","textarea"]],["autofocus",["button","input","keygen","select","textarea"]],["autoplay",["audio","video"]],["background",["body"]],[["bgcolor","bgColor"],["body","marquee","table","td","th","tr"]],["border",["img","object","table"]],["buffered",[]],["capture",[]],["challenge",[]],["charset",["script"]],["checked",["input"]],["cite",["blockquote","del","ins","q"]],[["class","className"],["*"]],["code",[]],["codebase",[]],["color",["font","hr"]],["cols",["textarea"]],[["colspan","colSpan"],["td","th"]],["content",["meta"]],[["contenteditable","contentEditable"],["*"]],[["contextmenu"],[]],["controls",["audio","video"]],["coords",["area"]],[["crossorigin","crossOrigin"],["audio","img","link","script","video"]],["csp",["iframe"]],["data",["object"]],[["datetime","dateTime"],["del","ins","time"]],["decoding",["img"]],["default",["track"]],["defer",["script"]],["dir",["*"]],[["dirname","dirName"],["input","textarea"]],["disabled",["button","fieldset","input","optgroup","option","select","textarea"]],["download",["a","area"]],["draggable",["*"]],["enctype",["form"]],[["enterkeyhint","enterKeyHint"],["textarea","contenteditable"]],["for",[]],["form",[]],[["formaction","formAction"],["input","button"]],[["formenctype","formEnctype"],["button","input"]],[["formmethod","formMethod"],["button","input"]],[["formnovalidate","formNoValidate"],["button","input"]],[["formtarget","formTarget"],["button","input"]],["headers",["td","th"]],["height",["canvas","embed","iframe","img","input","object","video"]],["hidden",["*"]],["high",["meter"]],["href",["a","area","base","link"]],["hreflang",["a","link"]],[["http-equiv","httpEquiv"],["meta"]],["icon",[]],["id",["*"]],["importance",[]],["integrity",["link","script"]],["intrinsicsize",[]],[["inputmode","inputMode"],["textarea","contenteditable"]],[["ismap","isMap"],["img"]],["itemprop",[]],["keytype",[]],["kind",["track"]],["label",["optgroup","option","track"]],["lang",["*"]],["language",[]],["loading",["img","iframe"]],["list",[]],["loop",["audio","marquee","video"]],["low",["meter"]],["manifest",[]],["max",["input","meter","progress"]],[["maxlength","maxLength"],["input","textarea"]],[["minlength","minLength"],["input","textarea"]],["media",["link","source","style"]],["method",["form"]],["min",["input","meter"]],["multiple",["input","select"]],["muted",["audio","video"]],["name",["button","form","fieldset","iframe","input","object","output","select","textarea","map","meta","param"]],[["novalidate","noValidate"],["form"]],["open",["details"]],["optimum",["meter"]],["pattern",["input"]],["ping",["a","area"]],["placeholder",["input","textarea"]],["poster",["video"]],["preload",["audio","video"]],["radiogroup",[]],[["readonly","readOnly"],["input","textarea"]],[["referrerpolicy","referrerPolicy"],["a","area","iframe","img","link","script"]],["rel",["a","area","link"]],["required",["input","select","textarea"]],["reversed",["ol"]],["rows",["textarea"]],[["rowspan","rowSpan"],["td","th"]],["sandbox",["iframe"]],["scope",["th"]],["scoped",[]],["selected",["option"]],["shape",["a","area"]],["size",["input","select"]],["sizes",["link","img","source"]],["slot",["*"]],["span",["col","colgroup"]],["spellcheck",["*"]],["src",["audio","embed","iframe","img","input","script","source","track","video"]],["srcdoc",["iframe"]],["srclang",["track"]],["srcset",["img","source"]],["start",["ol"]],["step",["input"]],["style",["*"]],["summary",["table"]],[["tabindex","tabIndex"],["*"]],["target",["a","area","base","form"]],["title",["*"]],["translate",[]],["type",["button","input","embed","object","script","source","style"]],[["usemap","useMap"],["img","input","object"]],["value",["button","data","input","li","meter","option","progress","param"]],["width",["canvas","embed","iframe","img","input","object","video"]],["wrap",["textarea"]]],f=new Map,b=(e,o,a)=>{f.has(e)?f.get(e).set(a,o):f.set(e,new Map([[a,o]]))};for(const[e,o]of D)for(let a of o)a=a.toUpperCase(),e instanceof Array?b(a,e[0],e[1]):b(a,e,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=e=>(o,a)=>{a!==void 0?a.addInitializer(()=>{customElements.define(e,o)}):customElements.define(e,o)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:y},v=(e=_,o,a)=>{const{kind:c,metadata:s}=a;let l=globalThis.litPropertyMetadata.get(s);if(l===void 0&&globalThis.litPropertyMetadata.set(s,l=new Map),l.set(a.name,e),c==="accessor"){const{name:E}=a;return{set(p){const u=o.get.call(this);o.set.call(this,p),this.requestUpdate(E,u,e)},init(p){return p!==void 0&&this.P(E,void 0,e),p}}}if(c==="setter"){const{name:E}=a;return function(p){const u=this[E];o.call(this,p),this.requestUpdate(E,u,e)}}throw Error("Unsupported decorator location: "+c)};function Y(e){return(o,a)=>typeof a=="object"?v(e,o,a):((c,s,l)=>{const E=s.hasOwnProperty(l);return s.constructor.createProperty(l,E?{...c,wrapped:!0}:c),E?Object.getOwnPropertyDescriptor(s,l):void 0})(e,o,a)}const k=B` *, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

/*
! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured sans font-family by default.
5. Use the user's configured sans font-feature-settings by default.
6. Use the user's configured sans font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from html so users can set them as a class directly on the html element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured mono font-family by default.
2. Use the user's configured mono font-feature-settings by default.
3. Use the user's configured mono font-variation-settings by default.
4. Correct the odd em font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-feature-settings: normal;
  /* 2 */
  font-variation-settings: normal;
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent sub and sup elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  letter-spacing: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional :invalid styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to inherit in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements display: block by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add vertical-align: middle to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}

.static {
  position: static;
}

.rounded-md {
  border-radius: 0.375rem;
}

.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity, 1));
}

.bg-slate-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.font-semibold {
  font-weight: 600;
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
 `;var X=Object.defineProperty,K=Object.getOwnPropertyDescriptor,H=(e,o,a,c)=>{for(var s=c>1?void 0:c?K(o,a):o,l=e.length-1,E;l>=0;l--)(E=e[l])&&(s=(c?E(o,a,s):E(s))||s);return c&&s&&X(o,a,s),s};let T=class extends I{constructor(){super(...arguments),this.label="Click Me"}render(){return U`
      <button
        class="default-styles bg-slate-800 text-white"
        @click="${this.handleClick}"
      >
        <slot></slot>
      </button>
    `}handleClick(){this.dispatchEvent(new CustomEvent("dh-button-click",{detail:"Button clicked"}))}};T.styles=[B``,k];H([Y({type:String})],T.prototype,"label",2);T=H([x("my-button")],T);const V={title:"MyButton",component:"my-button"},m=()=>U`<my-button>Label</my-button>`;var A,P,w;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:"() => html`<my-button>Label</my-button>`",...(w=(P=m.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};const Q=["Default"];export{m as Default,Q as __namedExportsOrder,V as default};
