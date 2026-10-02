class Book { constructor(title, author, year) { this._title = title; this._author = author; this._year = year; }
get title() {
    return this._title;
}

set title(value) {
    if (!value) {
        throw new Error("Title cannot be empty");
    }
    this._title = value;
}

get author() {
    return this._author;
}

set author(value) {
    if (!value) {
        throw new Error("Author cannot be empty");
    }
    this._author = value;
}

get year() {
    return this._year;
}

set year(value) {
    if (typeof value !== "number") {
        throw new Error("Year must be a number");
    }
    this._year = value;
}

printInfo() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
}

static findOldestBook(books) {
    return books.reduce((oldest, book) =>
        book.year < oldest.year ? book : oldest
    );
}}
export default Book;