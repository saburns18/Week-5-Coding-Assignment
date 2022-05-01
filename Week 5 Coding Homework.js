
class Student {
    constructor(name, level) {
        this.name = name;
        this.level = level;
            }

    describe() {
        return `${this.name} is in Level ${this.level} at our school.`;
    }
}

class Book {
    constructor(name) {
        this.name = name;
        this.students= [];
    }

    addStudent(student) {
        if (student instanceof Student) {
            this.students.push(student);
        } else {
            throw new Error(`You can only add students. Argument is not a student: ${student}`);
        }
    }

    describe() {
        return `${this.name} has ${this.students.length} students.`;
    }
}

class Level {
    constructor(name) {
        this.name = name;
        this.students= [];
    }
    
    addStudent(student) {
        if (student instanceof Student) {
            this.students.push(student);
        }
    }

    describe() {
        return `${this.name} has ${this.students.length} students.`;
    }
}

class Menu {
    constructor () {
        this.books = [];
        this.selectedBook = null; 
        this.levels = ['Beginner', 'Intermediate', 'Advanced', 'Master'];
        this.selectedLevel = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {

            switch (selection) {
                case '1':
                    this.enterBookName();
                    break;
                case '2': 
                    this.viewBookStudents();
                    break;
                case '3':
                    this.deleteBook();
                    break;
                case '4':
                    this.displayBooks();
                    break;
                case '5':
                    this.displayLevels();
                    break;
                case '6':
                    this.viewLevelStudents();    
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');   
    }

    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Enter new book
        2) View book students1
        3) Delete books
        4) Display all books
        5) Display all levels
        6) View students in levels
        `);
    }

    showBookMenuOptions(bookInfo) {
        return prompt(`
        0) Back
        1) Add Student 
        2) Remove Student
        --------------------
        ${bookInfo}
        `);
    }

    displayLevelMenuOptions() {
        return prompt(`
        0) Back
        1) Beginner
        2) Intermediate
        3) Advanced
        4) Master
        `);
    }

    displayBooks() {
        let bookString = '';
        for (let i = 0; i < this.books.length; i++) {
            bookString += + i + ') ' + this.books[i].name + '\n';
        }
        alert(bookString);
    }
    
    enterBookName() {
        let name = prompt('Enter name of new book:');
        this.books.push(new Book(name));
    }

    viewBookStudents() {
        let index = prompt('Enter the number of the book you would like to view:');
        
        if (index > -1 && index < this.books.length) {
            this.selectedBook = this.books[index];
            let description = 'Book Class Name: ' + this.selectedBook.name + '\n';

            for (let i = 0; i < this.selectedBook.students.length; i++) {
                description += i + ') ' + this.selectedBook.students[i].name 
                + ' - ' + this.selectedBook.students[i].level + '\n'; 
            }

            let selection = this.showBookMenuOptions(description);
            switch (selection) {
                case '1':
                    this.addStudent();
                    break;
                case '2':
                    this.removeStudent();
            }
        
           
        }
    }

    displayLevels() {
            let levelArray = [];
            for (let i = 0; i < this.levels.length; i++) {
            levelArray += + i + ') ' + this.levels[i] + '\n';
        }
        alert(levelArray);
    } 
    
    viewLevelStudents() {
        let index = prompt('Enter the number of the level you would like to view:');
        this.selectedLevel = this.levels[index];
        // this.selectedLevelStudents = this.books.students.push;
            let description = 'Level: ' + this.selectedLevel.name + '\n';

            for (let i = 0; i < this.selectedLevel.students.length; i++) {
                description += i + ') ' + this.selectedLevel
                + ' - ' + this.selectedlevel.students[i].name + '\n'; 
            }

            let selection = this.showLevelMenuOptions(description);
            switch (selection) {
                case '1':
                    this.addStudent();
                    break;
                case '2':
                    this.removeStudent();
            }
           
    }

    deleteBook() {
        let index = prompt('Enter the number of the book you wish to remove: ');
        if (index > -1 && index < this.books.length) {
            this.books.splice(index, 1);
        }
    }

    addStudent() {
        let name = prompt('Enter the name of the student to add: ');
        let level = prompt('Enter current level of student: ');
        this.selectedBook.students.push(new Student(name, level));
    }

    removeStudent() {
        let index = prompt('Enter the number of the student you wish to remove:');
        if (index > -1 && index < this.selectedStudent.students.length) {
            this.selectedBook.students.splice(index, 1);
        }
    };
}

let menu = new Menu();
menu.start();