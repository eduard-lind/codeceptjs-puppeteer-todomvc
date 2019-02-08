let Helper = codecept_helper;

const toString = sel => {
    if (typeof(sel) === 'string') return sel
    if (typeof(sel) === 'object') {
        return sel.css || sel.xpath
    }
}

class CustomHelper extends Helper {

    async hover(selector) {
        let client = this.helpers['Puppeteer'];

        await client.page.hover(toString(selector))
    }

}

module.exports = CustomHelper;