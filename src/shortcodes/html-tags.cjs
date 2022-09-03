const closes = true

// all the HTML tags https://www.w3schools.com/TAGs/
const tags = [
  { name: '!--', closing: ' --', snippet: 'ncomment' }, //	Defines a comment
  { name: '!DOCTYPE', snippet: 'ndoctype' }, // 	Defines the document type
  { name: 'a', closes }, //	Defines a hyperlink
  { name: 'abbr', closes }, //	Defines an abbreviation or an acronym
  { name: 'acronym', closes }, // Not supported in HTML5. Use <abbr"> instead. Defines an acronym
  { name: 'address', closes }, //	Defines contact information for the author/owner of a document
  { name: 'applet', closes }, //	Not supported in HTML5. Use <embed> or <object", closes}, // instead. Defines an embedded applet
  { name: 'area' }, //	Defines an area inside an image map
  { name: 'article', closes }, //	Defines an article
  { name: 'aside', closes }, //	Defines content aside from the page content
  { name: 'audio', closes }, //	Defines embedded sound content
  { name: 'b', closes }, //	Defines bold text
  { name: 'base' }, //	Specifies the base URL/target for all relative URLs in a document
  { name: 'basefont', closes }, //	Not supported in HTML5. Use CSS instead. Specifies a default color, size, and font for all text in a document
  { name: 'bdi', closes }, //	Isolates a part of text that might be formatted in a different direction from other text outside it
  { name: 'bdo', closes }, //	Overrides the current text direction
  { name: 'big', closes }, //	Not supported in HTML5. Use CSS instead. Defines big text
  { name: 'blockquote', closes }, //	Defines a section that is quoted from another source
  { name: 'body', closes }, //	Defines the document's body
  { name: 'br' }, //	Defines a single line break
  { name: 'button', closes }, //	Defines a clickable button
  { name: 'canvas', closes }, //	Used to draw graphics, on the fly, via scripting (usually JavaScript)
  { name: 'caption', closes }, //	Defines a table caption
  { name: 'center', closes }, //	Not supported in HTML5. Use CSS instead.Defines centered text
  { name: 'cite', closes }, //	Defines the title of a work
  { name: 'code', closes }, //	Defines a piece of computer code
  { name: 'col' }, // Specifies column properties for each column within a <colgroup> element
  { name: 'colgroup', closes }, //	Specifies a group of one or more columns in a table for formatting
  { name: 'data', closes }, //	Adds a machine-readable translation of a given content
  { name: 'datalist', closes }, //	Specifies a list of pre-defined options for input controls
  { name: 'dd', closes }, //	Defines a description/value of a term in a description list
  { name: 'del', closes }, //	Defines text that has been deleted from a document
  { name: 'details', closes }, //	Defines additional details that the user can view or hide
  { name: 'dfn', closes }, //	Specifies a term that is going to be defined within the content
  { name: 'dialog', closes }, // Defines a dialog box or window
  { name: 'dir', closes }, // Not supported in HTML5. Use <ul> instead. Defines a directory list
  { name: 'div', closes }, //	Defines a section in a document
  { name: 'dl', closes }, //	Defines a description list
  { name: 'dt', closes }, //	Defines a term/name in a description list
  { name: 'em', closes }, //	Defines emphasized text
  { name: 'embed' }, //	Defines a container for an external application
  { name: 'fieldset', closes }, //	Groups related elements in a form
  { name: 'figcaption', closes }, //	Defines a caption for a <figure> element
  { name: 'figure', closes }, //	Specifies self-contained content
  { name: 'font', closes }, //	Not supported in HTML5. Use CSS instead. Defines font, color, and size for text
  { name: 'footer', closes }, //	Defines a footer for a document or section
  { name: 'form', closes }, //	Defines an HTML form for user input
  { name: 'frame', closes }, //	Not supported in HTML5. Defines a window (a frame) in a frameset
  { name: 'frameset', closes }, //	Not supported in HTML5. Defines a set of frames
  { name: 'h1', closes }, //	Defines HTML headings
  { name: 'h2', closes }, //	Defines HTML headings
  { name: 'h3', closes }, //	Defines HTML headings
  { name: 'h4', closes }, //	Defines HTML headings
  { name: 'h5', closes }, //	Defines HTML headings
  { name: 'h6', closes }, //	Defines HTML headings
  { name: 'head', closes }, //	Contains metadata/information for the document
  { name: 'header', closes }, //	Defines a header for a document or section
  { name: 'hr' }, //	Defines a thematic change in the content
  { name: 'html', closes }, //	Defines the root of an HTML document
  { name: 'i', closes }, //	Defines a part of text in an alternate voice or mood
  { name: 'iframe', closes }, //	Defines an inline frame
  { name: 'img' }, //	Defines an image
  { name: 'input' }, //	Defines an input control
  { name: 'ins', closes }, //	Defines a text that has been inserted into a document
  { name: 'kbd', closes }, //	Defines keyboard input
  { name: 'label', closes }, //	Defines a label for an <input> element
  { name: 'legend' }, //	Defines a caption for a <fieldset> element
  { name: 'li', closes }, //	Defines a list item
  { name: 'link' }, //	Defines the relationship between a document and an external resource (most used to link to style sheets)
  { name: 'main', closes }, //	Specifies the main content of a document
  { name: 'map', closes }, //	Defines an image map
  { name: 'mark', closes }, //	Defines marked/highlighted text
  { name: 'meta' }, //	Defines metadata about an HTML document
  { name: 'meter', closes }, //	Defines a scalar measurement within a known range (a gauge)
  { name: 'nav', closes }, //	Defines navigation links
  { name: 'noframes', closes }, //	Not supported in HTML5. Defines an alternate content for users that do not support frames
  { name: 'noscript', closes }, //	Defines an alternate content for users that do not support client-side scripts
  { name: 'object', closes }, //	Defines a container for an external application
  { name: 'ol', closes }, //	Defines an ordered list
  { name: 'optgroup', closes }, //	Defines a group of related options in a drop-down list
  { name: 'option', closes }, //	Defines an option in a drop-down list
  { name: 'output', closes }, //	Defines the result of a calculation
  { name: 'p', closes }, //	Defines a paragraph
  { name: 'param' }, //	Defines a parameter for an object
  { name: 'picture', closes }, //	Defines a container for multiple image resources
  { name: 'pre', closes }, //	Defines preformatted text
  { name: 'progress', closes }, //	Represents the progress of a task
  { name: 'q', closes }, //	Defines a short quotation
  { name: 'rp', closes }, //	Defines what to show in browsers that do not support ruby annotations
  { name: 'rt', closes }, //	Defines an explanation/pronunciation of characters (for East Asian typography)
  { name: 'ruby', closes }, //	Defines a ruby annotation (for East Asian typography)
  { name: 's', closes }, //	Defines text that is no longer correct
  { name: 'samp', closes }, //	Defines sample output from a computer program
  { name: 'script', closes }, //	Defines a client-side script
  { name: 'section', closes }, //	Defines a section in a document
  { name: 'select', closes }, //	Defines a drop-down list
  { name: 'small', closes }, //	Defines smaller text
  { name: 'source' }, //	Defines multiple media resources for media elements (<video> and <audio>)
  { name: 'span', closes }, //	Defines a section in a document
  { name: 'strike', closes }, //	Not supported in HTML5. Use <del> or <s> instead. Defines strikethrough text
  { name: 'strong', closes }, //	Defines important text
  { name: 'style', closes }, //	Defines style information for a document
  { name: 'sub', closes }, //	Defines subscripted text
  { name: 'summary', closes }, //	Defines a visible heading for a <details> element
  { name: 'sup', closes }, //	Defines superscripted text
  { name: 'svg', closes }, //	Defines a container for SVG graphics
  { name: 'table', closes }, //	Defines a table
  { name: 'tbody', closes }, //	Groups the body content in a table
  { name: 'td', closes }, //	Defines a cell in a table
  { name: 'template', closes }, //	Defines a container for content that should be hidden when the page loads
  { name: 'textarea', closes }, //	Defines a multiline input control (text area)
  { name: 'tfoot', closes }, //	Groups the footer content in a table
  { name: 'th', closes }, //	Defines a header cell in a table
  { name: 'thead', closes }, //	Groups the header content in a table
  { name: 'time', closes }, //	Defines a specific time (or datetime)
  { name: 'title', closes }, //	Defines a title for the document
  { name: 'tr', closes }, //	Defines a row in a table
  { name: 'track' }, //	Defines text tracks for media elements (<video> and <audio>)
  { name: 'tt', closes }, //	Not supported in HTML5. Use CSS instead. Defines teletype text
  { name: 'u', closes }, //	Defines some text that is unarticulated and styled differently from normal text
  { name: 'ul', closes }, //	Defines an unordered list
  { name: 'var', closes }, //	Defines a variable
  { name: 'video', closes }, //	Defines embedded video content
  { name: 'wbr' }, //	Defines a possible line-break
]

module.exports = tags
