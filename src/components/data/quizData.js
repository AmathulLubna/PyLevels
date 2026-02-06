const quizData = [
  {
    id: 1,
    name: "Introduction to Python",
    description: "History, features, installation, environment setup",
    difficulty: "basic",
    questions: [
      {
        id: 101,
        type: 'mcq',
        question: 'Who created Python?',
        options: ['Dennis Ritchie', 'Guido van Rossum', 'James Gosling', 'Bjarne Stroustrup'],
        correctAnswer: 1,
        explanation: 'Guido van Rossum created Python in the late 1980s.'
      },
      {
        id: 102,
        type: 'mcq',
        question: 'Which of these is NOT a feature of Python?',
        options: ['Interpreted', 'Dynamically Typed', 'Compiled (like C++)', 'Object-Oriented'],
        correctAnswer: 2,
        explanation: 'Python is an interpreted language, not strictly compiled like C++.'
      },
      {
        id: 103,
        type: 'mcq',
        question: 'What is the correct file extension for Python files?',
        options: ['.pt', '.pyt', '.py', '.python'],
        correctAnswer: 2,
        explanation: 'Python source code files use the .py extension.'
      },
      {
        id: 104,
        type: 'mcq',
        question: 'Which command starts the Python interactive shell in terminal?',
        options: ['run python', 'go python', 'python', 'start python'],
        correctAnswer: 2,
        explanation: 'Typing "python" (or "python3") in the terminal starts the interactive shell.'
      },
      {
        id: 105,
        type: 'mcq',
        question: 'Python is known for emphasizing:',
        options: ['Code readability', 'Fastest execution speed', 'Manual memory management', 'Complex syntax'],
        correctAnswer: 0,
        explanation: 'Python design philosophy emphasizes code readability and simplicity.'
      },
      {
        id: 106,
        type: 'mcq',
        question: 'Which version of Python is the current standard?',
        options: ['Python 1', 'Python 2', 'Python 3', 'Python 4'],
        correctAnswer: 2,
        explanation: 'Python 3 is the current and actively maintained version of the language.'
      },
      {
        id: 107,
        type: 'mcq',
        question: 'What is PEP 8?',
        options: ['A Python library', 'A style guide for Python code', 'A compiler', 'A database'],
        correctAnswer: 1,
        explanation: 'PEP 8 is the official style guide for writing clean and consistent Python code.'
      },
      {
        id: 108,
        type: 'mcq',
        question: 'Which of the following serves as a package manager for Python?',
        options: ['npm', 'pip', 'gem', 'composer'],
        correctAnswer: 1,
        explanation: 'pip is the standard package installer for Python.'
      },
      {
        id: 109,
        type: 'mcq',
        question: 'Python is often described as:',
        options: ['"Batteries included"', '"Assembly included"', '"No libraries included"', '"Bare metal"'],
        correctAnswer: 0,
        explanation: '"Batteries included" means Python comes with a rich standard library.'
      },
      {
        id: 110,
        type: 'mcq',
        question: 'In Python, code blocks are defined by:',
        options: ['Curly braces {}', 'Keywords begin/end', 'Indentation', 'Semicolons'],
        correctAnswer: 2,
        explanation: 'Python uses significant indentation (whitespace) to define scope and blocks.'
      },
      {
        id: 111,
        type: 'trueFalse',
        question: 'Python can be used for Web Development.',
        correctAnswer: true,
        explanation: 'True. Frameworks like Django and Flask make Python popular for web dev.'
      },
      {
        id: 112,
        type: 'trueFalse',
        question: 'Python code must be compiled to an .exe file to run.',
        correctAnswer: false,
        explanation: 'False. Python is interpreted and scripts can be run directly by the interpreter.'
      },
      {
        id: 113,
        type: 'trueFalse',
        question: 'Indentation is optional in Python.',
        correctAnswer: false,
        explanation: 'False. Indentation is mandatory and syntactically significant in Python.'
      },
      {
        id: 114,
        type: 'trueFalse',
        question: 'Python is case-sensitive.',
        correctAnswer: true,
        explanation: 'True. "Print" and "print" are different in Python.'
      },
      {
        id: 115,
        type: 'trueFalse',
        question: 'Comments in Python start with //.',
        correctAnswer: false,
        explanation: 'False. Single-line comments in Python start with #.'
      }
    ]
  },
  {
    id: 2,
    name: "Basic Syntax",
    description: "print(), comments, code structure, indentation",
    difficulty: "basic",
    questions: [
      {
        id: 201,
        type: 'mcq',
        question: 'How do you print "Hello" to the console?',
        options: ['echo("Hello")', 'print("Hello")', 'console.log("Hello")', 'System.out.println("Hello")'],
        correctAnswer: 1,
        explanation: 'The print() function is used to output text to the console.'
      },
      {
        id: 202,
        type: 'mcq',
        question: 'Which character starts a comment in Python?',
        options: ['//', '/*', '#', '--'],
        correctAnswer: 2,
        explanation: '# is used for single-line comments in Python.'
      },
      {
        id: 203,
        type: 'mcq',
        question: 'How do you create a multi-line string or comment?',
        options: ['# ... #', '/* ... */', '""" ... """', '// ... //'],
        correctAnswer: 2,
        explanation: 'Triple quotes (""" or \'\'\') are used for multi-line strings/docstrings.'
      },
      {
        id: 204,
        type: 'mcq',
        question: 'What happens if you mix tabs and spaces for indentation?',
        options: ['It works fine', 'It causes an IndentationError', 'It runs slower', 'It prints a warning'],
        correctAnswer: 1,
        explanation: 'Python 3 disallows mixing tabs and spaces for indentation; it raises an error.'
      },
      {
        id: 205,
        type: 'mcq',
        question: 'Which is a valid variable name?',
        options: ['2variable', 'my-variable', 'my_variable', 'class'],
        correctAnswer: 2,
        explanation: 'Variable names cannot start with numbers or use hyphens. "class" is a keyword.'
      },
      {
        id: 206,
        type: 'trueFalse',
        question: 'You need to use semicolons ; to end lines in Python.',
        correctAnswer: false,
        explanation: 'False. Semicolons are optional and rarely used in Python.'
      },
      {
        id: 207,
        type: 'trueFalse',
        question: 'Python statements are usually written one per line.',
        correctAnswer: true,
        explanation: 'True. This is the standard idiomatic way to write Python.'
      },
      {
        id: 208,
        type: 'mcq',
        question: 'What does the input() function do?',
        options: ['Prints text', 'Reads user input as string', 'Reads file', 'Calculates math'],
        correctAnswer: 1,
        explanation: 'input() reads a line from input, converts it to a string, and returns it.'
      },
      {
        id: 209,
        type: 'mcq',
        question: 'How do you join two strings?',
        options: ['str1 - str2', 'str1 . str2', 'str1 + str2', 'join(str1, str2)'],
        correctAnswer: 2,
        explanation: 'The + operator concatenates (joins) two strings.'
      },
      {
        id: 210,
        type: 'mcq',
        question: 'What represents a null value in Python?',
        options: ['null', 'nil', 'None', 'undefined'],
        correctAnswer: 2,
        explanation: 'None is the keyword used to define a null value or no value at all.'
      },
      {
        id: 211,
        type: 'trueFalse',
        question: 'Docstrings are ignored by the Python interpreter completely.',
        correctAnswer: false,
        explanation: 'False. They are stored in the __doc__ attribute of the object.'
      },
      {
        id: 212,
        type: 'trueFalse',
        question: 'print(5, 10) will output "5 10".',
        correctAnswer: true,
        explanation: 'True. print() separates multiple arguments with a space by default.'
      },
      {
        id: 213,
        type: 'trueFalse',
        question: 'Variables in Python must be declared with a type.',
        correctAnswer: false,
        explanation: 'False. Python infers the type during assignment.'
      },
      {
        id: 214,
        type: 'trueFalse',
        question: 'The keyword "pass" does nothing.',
        correctAnswer: true,
        explanation: 'True. "pass" is a null statement used as a placeholder.'
      },
      {
        id: 215,
        type: 'trueFalse',
        question: 'Python keywords (like if, else) can be used as variable names.',
        correctAnswer: false,
        explanation: 'False. Keywords are reserved and cannot be used as identifiers.'
      }
    ]
  },
  // Template for Levels 3-17: Using 5 representative questions per level to optimize file size while maintaining structure.
  {
    id: 3,
    name: "Variables and Data Types",
    description: "int, float, bool, str, list, tuple, set, dict, type conversion",
    difficulty: "basic",
    questions: [
      { id: 301, type: 'mcq', question: 'Which function checks the data type of a variable?', options: ['typeof()', 'type()', 'check()', 'isinstance()'], correctAnswer: 1, explanation: 'type() returns the type of the specified object.' },
      { id: 302, type: 'mcq', question: 'Which collection is ordered and immutable?', options: ['List', 'Set', 'Tuple', 'Dictionary'], correctAnswer: 2, explanation: 'Tuples are ordered and immutable sequences.' },
      { id: 303, type: 'mcq', question: 'How do you convert the string "123" to an integer?', options: ['str("123")', 'float("123")', 'int("123")', 'cast("123")'], correctAnswer: 2, explanation: 'int() converts a string or number to an integer.' },
      { id: 304, type: 'trueFalse', question: 'Lists are mutable (changeable).', correctAnswer: true, explanation: 'True. You can add, remove, or change items in a list.' },
      { id: 305, type: 'trueFalse', question: 'Sets allow duplicate values.', correctAnswer: false, explanation: 'False. Sets are collections of unique elements.' },
      { id: 306, type: 'mcq', question: 'What is the boolean value of an empty list []?', options: ['True', 'False', 'None', 'Error'], correctAnswer: 1, explanation: 'Empty collections evaluate to False in boolean context.' },
      { id: 307, type: 'mcq', question: 'Which creates a dictionary?', options: ['[]', '()', '{}', '<>'], correctAnswer: 2, explanation: '{} creates a dictionary (or a set if values are not key:value).' },
      { id: 308, type: 'mcq', question: 'What is a float?', options: ['A whole number', 'A decimal number', 'A string', 'A list'], correctAnswer: 1, explanation: 'Floats represent real numbers with decimal points.' },
      { id: 309, type: 'trueFalse', question: 'Strings are immutable in Python.', correctAnswer: true, explanation: 'True. You cannot change characters in a string string directly.' },
      { id: 310, type: 'trueFalse', question: 'You can store different types in a single list.', correctAnswer: true, explanation: 'True. Lists can hold mixed data types.' },
      { id: 311, type: 'mcq', question: 'Result of 10 // 3?', options: ['3.33', '3', '4', '3.0'], correctAnswer: 1, explanation: '// is the floor division operator.' },
      { id: 312, type: 'mcq', question: 'Result of 2 ** 3?', options: ['6', '5', '8', '9'], correctAnswer: 2, explanation: '** is the exponentiation operator (2 to the power of 3).' },
      { id: 313, type: 'trueFalse', question: 'True and False are keywords.', correctAnswer: true, explanation: 'True. They represent boolean values.' },
      { id: 314, type: 'trueFalse', question: 'int(3.9) returns 4.', correctAnswer: false, explanation: 'False. int() truncates the decimal part, returning 3.' },
      { id: 315, type: 'trueFalse', question: 'A tuple with one item needs a trailing comma, e.g., (1,).', correctAnswer: true, explanation: 'True. (1) interprets as an integer 1, (1,) interprets as a tuple.' }
    ]
  },
  {
    id: 4,
    name: "Operators",
    description: "Arithmetic, assignment, comparison, logical, identity, membership",
    difficulty: "basic",
    questions: [
      { id: 401, type: 'mcq', question: 'What is the output of 5 % 2?', options: ['2.5', '2', '1', '0'], correctAnswer: 2, explanation: '% is the modulus operator, returning the remainder.' },
      { id: 402, type: 'mcq', question: 'Which operator implies "not equal"?', options: ['<>', '!=', '!==', 'not='], correctAnswer: 1, explanation: '!= checks if two values are not equal.' },
      { id: 403, type: 'mcq', question: 'Result of: True and False', options: ['True', 'False', 'None', 'Error'], correctAnswer: 1, explanation: '"and" returns True only if both operands are True.' },
      { id: 404, type: 'trueFalse', question: '"in" is a membership operator.', correctAnswer: true, explanation: 'True. It checks if a value exists in a sequence.' },
      { id: 405, type: 'trueFalse', question: '"is" checks if two variables have the same value.', correctAnswer: false, explanation: 'False. "is" checks if they refer to the same object in memory.' },
      // Filler to reach 15 logically, reusing pattern for brevity in this large file
      { id: 406, type: 'mcq', question: 'x = 5; x += 3. What is x?', options: ['5', '3', '8', '15'], correctAnswer: 2, explanation: '+= adds right operand to left operand.' },
      { id: 407, type: 'mcq', question: 'not True is:', options: ['True', 'False', 'None', '1'], correctAnswer: 1, explanation: 'not inverts the boolean value.' },
      { id: 408, type: 'mcq', question: '3 < 4 and 4 < 5', options: ['True', 'False', 'Error', 'None'], correctAnswer: 0, explanation: 'Both conditions are true.' },
      { id: 409, type: 'trueFalse', question: '== is the assignment operator.', correctAnswer: false, explanation: 'False. = is assignment, == is comparison.' },
      { id: 410, type: 'trueFalse', question: 'Operators have precedence rules.', correctAnswer: true, explanation: 'True. Multiplication happens before addition, etc.' },
      { id: 411, type: 'mcq', question: 'Output of 2 * 3 ** 2?', options: ['36', '18', '12', '24'], correctAnswer: 1, explanation: 'Exponentiation (**) has higher precedence than multiplication.' },
      { id: 412, type: 'mcq', question: '5 >= 5', options: ['True', 'False', 'Error', 'None'], correctAnswer: 0, explanation: 'Greater than or equal to.' },
      { id: 413, type: 'trueFalse', question: 'is not is a valid operator.', correctAnswer: true, explanation: 'True. Checks if objects are not the same identity.' },
      { id: 414, type: 'trueFalse', question: 'Bitwise operators exist in Python.', correctAnswer: true, explanation: 'True. &, |, ^, etc.' },
      { id: 415, type: 'trueFalse', question: 'Logical operators can simply be used on non-booleans.', correctAnswer: true, explanation: 'True. They return one of the operands.' }
    ]
  },
  {
    id: 5,
    name: "Flow Control",
    description: "if/else, for loops, while loops, break, continue, pass",
    difficulty: "basic",
    questions: [
      { id: 501, type: 'mcq', question: 'Which keyword starts a conditional block?', options: ['when', 'cond', 'if', 'loop'], correctAnswer: 2, explanation: 'if statements start conditional logic.' },
      { id: 502, type: 'mcq', question: 'How do you check multiple conditions?', options: ['else if', 'elseif', 'elif', 'if else'], correctAnswer: 2, explanation: 'Python uses "elif" for else-if conditions.' },
      { id: 503, type: 'mcq', question: 'What stops a loop immediately?', options: ['stop', 'break', 'continue', 'exit'], correctAnswer: 1, explanation: 'break terminates the loop entirely.' },
      { id: 504, type: 'trueFalse', question: 'for loops in Python can iterate over strings.', correctAnswer: true, explanation: 'True. Strings are iterable sequences of characters.' },
      { id: 505, type: 'trueFalse', question: 'while loops run until a condition is false.', correctAnswer: true, explanation: 'True. They repeat as long as the condition remains true.' },
      { id: 506, type: 'mcq', question: 'range(3) produces:', options: ['1, 2, 3', '0, 1, 2', '0, 1, 2, 3', '1, 2'], correctAnswer: 1, explanation: 'range(n) starts at 0 and stops before n.' },
      { id: 507, type: 'mcq', question: 'Skips the rest of current loop iteration:', options: ['skip', 'pass', 'continue', 'break'], correctAnswer: 2, explanation: 'continue jumps to the next iteration.' },
      { id: 508, type: 'mcq', question: 'Code: if True: pass. Effect?', options: ['Error', 'Nothing', 'Crash', 'Print pass'], correctAnswer: 1, explanation: 'pass does nothing.' },
      { id: 509, type: 'trueFalse', question: 'else can be used with loops.', correctAnswer: true, explanation: 'True. An else block on a loop runs if the loop completes without breaking.' },
      { id: 510, type: 'trueFalse', question: 'Indentation determines loop body.', correctAnswer: true, explanation: 'True.' },
      { id: 511, type: 'mcq', question: 'Iterating over a dict iterates over:', options: ['Keys', 'Values', 'Items', 'Nothing'], correctAnswer: 0, explanation: 'By default, loops iterate over keys.' },
      { id: 512, type: 'mcq', question: 'Which is not a loop?', options: ['for', 'while', 'do-while', 'None'], correctAnswer: 2, explanation: 'Python does not have a do-while loop.' },
      { id: 513, type: 'trueFalse', question: 'Nested loops are allowed.', correctAnswer: true, explanation: 'True.' },
      { id: 514, type: 'trueFalse', question: 'You can modify the list you are iterating over safely.', correctAnswer: false, explanation: 'False. It can cause unexpected behavior.' },
      { id: 515, type: 'trueFalse', question: 'range(1, 5) includes 5.', correctAnswer: false, explanation: 'False. Inclusive start, exclusive stop.' }
    ]
  },
  {
    id: 6,
    name: "Functions",
    description: "Defining, calling, arguments, *args, **kwargs, scope",
    difficulty: "basic",
    questions: [
      { id: 601, type: 'mcq', question: 'Keyword to define a function:', options: ['func', 'def', 'function', 'define'], correctAnswer: 1, explanation: 'def is used to define a function.' },
      { id: 602, type: 'mcq', question: 'What does *args allow?', options: ['Keyword arguments', 'Variable number of positional arguments', 'Default values', 'Pointer arguments'], correctAnswer: 1, explanation: '*args collects extra positional arguments into a tuple.' },
      { id: 603, type: 'mcq', question: 'Variables defined inside a function are:', options: ['Global', 'Local', 'Universal', 'Static'], correctAnswer: 1, explanation: 'They have local scope by default.' },
      { id: 604, type: 'trueFalse', question: 'Functions can return multiple values.', correctAnswer: true, explanation: 'True. They return them as a tuple.' },
      { id: 605, type: 'trueFalse', question: 'Python supports recursive functions.', correctAnswer: true, explanation: 'True. A function can call itself.' },
      { id: 606, type: 'mcq', question: 'Default arguments are evaluated:', options: ['Every call', 'Once at definition', 'Randomly', 'Never'], correctAnswer: 1, explanation: 'Important! Mutable default args persist between calls.' },
      { id: 607, type: 'mcq', question: 'Keyword to return a value:', options: ['give', 'return', 'back', 'send'], correctAnswer: 1, explanation: 'return exits the function with a value.' },
      { id: 608, type: 'mcq', question: 'Lambda functions are:', options: ['Anonymous', 'Named', 'Complex', 'Slow'], correctAnswer: 0, explanation: 'Lambdas are small anonymous functions.' },
      { id: 609, type: 'trueFalse', question: 'Functions are objects in Python.', correctAnswer: true, explanation: 'True. They can be passed around like variables.' },
      { id: 610, type: 'trueFalse', question: '**kwargs collects keyword arguments.', correctAnswer: true, explanation: 'True. Into a dictionary.' },
      { id: 611, type: 'mcq', question: 'Keyword to use global variable inside function:', options: ['extern', 'global', 'super', 'outer'], correctAnswer: 1, explanation: 'global x allows modifying global x.' },
      { id: 612, type: 'mcq', question: 'return with no value returns:', options: ['0', 'False', 'None', 'Error'], correctAnswer: 2, explanation: 'Implicitly returns None.' },
      { id: 613, type: 'trueFalse', question: 'Docstrings are required for functions.', correctAnswer: false, explanation: 'False, but highly recommended.' },
      { id: 614, type: 'trueFalse', question: 'You can pass functions as arguments.', correctAnswer: true, explanation: 'True. Higher-order functions.' },
      { id: 615, type: 'trueFalse', question: 'Python supports function overloading natively like Java.', correctAnswer: false, explanation: 'False. It uses default args or variable args instead.' }
    ]
  },
  {
    id: 7,
    name: "Modules and Packages",
    description: "Importing, module creation, standard library",
    difficulty: "intermediate",
    questions: [
      { id: 701, type: 'mcq', question: 'How to import a specific function from a module?', options: ['import func from mod', 'from mod import func', 'using mod.func', 'include mod'], correctAnswer: 1, explanation: 'from X import Y syntax.' },
      { id: 702, type: 'mcq', question: 'What file makes a directory a package?', options: ['__package__.py', '__init__.py', 'main.py', 'config.py'], correctAnswer: 1, explanation: '__init__.py marks a directory as a package.' },
      { id: 703, type: 'mcq', question: 'Where does Python look for imports?', options: ['sys.path', 'sys.modules', 'sys.dirs', 'PATH'], correctAnswer: 0, explanation: 'sys.path is the list of directories searched.' },
      { id: 704, type: 'trueFalse', question: 'You can give an imported module an alias.', correctAnswer: true, explanation: 'True. import pandas as pd.' },
      { id: 705, type: 'trueFalse', question: 'Every Python file is a module.', correctAnswer: true, explanation: 'True.' },
      { id: 706, type: 'mcq', question: 'Standard library module for math:', options: ['calc', 'math', 'numbers', 'algebra'], correctAnswer: 1, explanation: 'import math.' },
      { id: 707, type: 'mcq', question: 'Module for random numbers:', options: ['rand', 'random', 'chance', 'dice'], correctAnswer: 1, explanation: 'import random.' },
      { id: 708, type: 'mcq', question: 'What does if __name__ == "__main__": do?', options: ['Nothing', 'Checks if script runs directly', 'Checks if imported', 'Checks syntax'], correctAnswer: 1, explanation: 'Runs code only if script is executed, not imported.' },
      { id: 709, type: 'trueFalse', question: 'pip is used to install external packages.', correctAnswer: true, explanation: 'True.' },
      { id: 710, type: 'trueFalse', question: 'You can import everything using *.', correctAnswer: true, explanation: 'True. from math import *.' },
      { id: 711, type: 'mcq', question: 'Which function lists names in a module?', options: ['list()', 'dir()', 'show()', 'names()'], correctAnswer: 1, explanation: 'dir(module) shows attributes.' },
      { id: 712, type: 'mcq', question: 'Modules are executed when imported.', options: ['True', 'False'], correctAnswer: 0, explanation: 'The top-level code runs once on first import.' },
      { id: 713, type: 'trueFalse', question: 'Circular imports can cause errors.', correctAnswer: true, explanation: 'True.' },
      { id: 714, type: 'trueFalse', question: 'sys.argv contains command line args.', correctAnswer: true, explanation: 'True.' },
      { id: 715, type: 'trueFalse', question: 'Standard library is installed separately.', correctAnswer: false, explanation: 'False. It comes with Python.' }
    ]
  },
  {
    id: 8,
    name: "Exception Handling",
    description: "try/except/finally, raise, custom exceptions",
    difficulty: "intermediate",
    questions: [
      { id: 801, type: 'mcq', question: 'Which block catches errors?', options: ['catch', 'except', 'error', 'handle'], correctAnswer: 1, explanation: 'try...except block.' },
      { id: 802, type: 'mcq', question: 'Code in "finally" runs:', options: ['Only if error', 'Only if no error', 'Always', 'Never'], correctAnswer: 2, explanation: 'Finally runs regardless of exceptions.' },
      { id: 803, type: 'mcq', question: 'Keyword to trigger an exception manually:', options: ['throw', 'raise', 'trigger', 'error'], correctAnswer: 1, explanation: 'raise ValueError("...")' },
      { id: 804, type: 'trueFalse', question: 'You can catch multiple exception types.', correctAnswer: true, explanation: 'True. except (TypeError, ValueError):' },
      { id: 805, type: 'trueFalse', question: 'An else block can follow try/except.', correctAnswer: true, explanation: 'True. It runs if NO exception occurs.' },
      { id: 806, type: 'mcq', question: 'Base class for most exceptions:', options: ['Error', 'Exception', 'BaseError', 'Object'], correctAnswer: 1, explanation: 'Exception.' },
      { id: 807, type: 'mcq', question: 'Catching "Exception" catches:', options: ['Only SyntaxError', 'Almost all errors', 'Nothing', 'IO errors only'], correctAnswer: 1, explanation: 'It is a catch-all for runtime errors.' },
      { id: 808, type: 'mcq', question: 'ZeroDivisionError occurs when:', options: ['Dividing by 0', 'Multiplying by 0', 'Adding 0', 'Subtracting 0'], correctAnswer: 0, explanation: 'Division by zero is undefined.' },
      { id: 809, type: 'trueFalse', question: 'Syntax errors can be caught by try/except.', correctAnswer: false, explanation: 'False. Syntax errors parse before execution.' },
      { id: 810, type: 'trueFalse', question: 'Custom exceptions must inherit from Exception.', correctAnswer: true, explanation: 'True.' },
      { id: 811, type: 'mcq', question: 'What happens to the program if an error is not caught?', options: ['It continues', 'It crashes/terminates', 'It restarts', 'It ignores it'], correctAnswer: 1, explanation: 'Unhandled exceptions terminate the script.' },
      { id: 812, type: 'mcq', question: 'The "as" keyword in except is used to:', options: ['Rename error', 'Bind error instance to variable', 'Ignore error', 'Cast error'], correctAnswer: 1, explanation: 'except ValueError as e:' },
      { id: 813, type: 'trueFalse', question: 'assert statements raise AssertionError.', correctAnswer: true, explanation: 'True. Used for debugging.' },
      { id: 814, type: 'trueFalse', question: 'You can nest try/except blocks.', correctAnswer: true, explanation: 'True.' },
      { id: 815, type: 'trueFalse', question: 'KeyboardInterrupt cannot be caught.', correctAnswer: false, explanation: 'False. It can be caught.' }
    ]
  },
  {
    id: 9,
    name: "File Handling",
    description: "Reading/writing files, CSV, JSON, file operations",
    difficulty: "intermediate",
    questions: [
      { id: 901, type: 'mcq', question: 'Function to open a file:', options: ['file()', 'open()', 'read()', 'load()'], correctAnswer: 1, explanation: 'open(filename, mode)' },
      { id: 902, type: 'mcq', question: 'Mode to write (overwriting):', options: ['"r"', '"w"', '"a"', '"x"'], correctAnswer: 1, explanation: '"w" mode opens for writing, truncating file.' },
      { id: 903, type: 'mcq', question: 'Best way to open files (handles closing):', options: ['try/finally', 'with statement', 'open/close', 'auto'], correctAnswer: 1, explanation: 'with open(...) as f: context manager.' },
      { id: 904, type: 'trueFalse', question: 'read() reads the whole file as a string.', correctAnswer: true, explanation: 'True.' },
      { id: 905, type: 'trueFalse', question: '"a" mode appends to the end of file.', correctAnswer: true, explanation: 'True.' },
      { id: 906, type: 'mcq', question: 'Module for JSON handling:', options: ['jsn', 'object', 'json', 'parse'], correctAnswer: 2, explanation: 'import json' },
      { id: 907, type: 'mcq', question: 'Method to write list to file lines:', options: ['writelines()', 'writelist()', 'print()', 'dump()'], correctAnswer: 0, explanation: 'file.writelines(list)' },
      { id: 908, type: 'mcq', question: 'Default mode for open():', options: ['"w"', '"r"', '"rb"', '"a"'], correctAnswer: 1, explanation: 'Read mode "r" is default.' },
      { id: 909, type: 'trueFalse', question: 'Binary files need "b" in mode.', correctAnswer: true, explanation: 'True. e.g., "rb" or "wb".' },
      { id: 910, type: 'trueFalse', question: 'json.dumps() converts dict to string.', correctAnswer: true, explanation: 'True.' },
      { id: 911, type: 'mcq', question: 'Module for CSV files:', options: ['excel', 'csv', 'sheets', 'pandas'], correctAnswer: 1, explanation: 'import csv' },
      { id: 912, type: 'mcq', question: 'readlines() returns:', options: ['String', 'List of strings', 'Integer', 'None'], correctAnswer: 1, explanation: 'A list containing each line.' },
      { id: 913, type: 'trueFalse', question: 'File must be closed after use.', correctAnswer: true, explanation: 'True, to release resources.' },
      { id: 914, type: 'trueFalse', question: 'seek() moves the file cursor.', correctAnswer: true, explanation: 'True.' },
      { id: 915, type: 'trueFalse', question: 'Pickle module serializes objects.', correctAnswer: true, explanation: 'True.' }
    ]
  },
  {
    id: 10,
    name: "Date and Time",
    description: "datetime module, timestamps, date formatting",
    difficulty: "intermediate",
    questions: [
      { id: 1001, type: 'mcq', question: 'Main module for dates:', options: ['time', 'date', 'datetime', 'calendar'], correctAnswer: 2, explanation: 'datetime module.' },
      { id: 1002, type: 'mcq', question: 'Get current date and time:', options: ['datetime.now()', 'datetime.today()', 'time.now()', 'date.current()'], correctAnswer: 0, explanation: 'datetime.datetime.now()' },
      { id: 1003, type: 'mcq', question: 'Format date to string:', options: ['strptime', 'strftime', 'format', 'tostring'], correctAnswer: 1, explanation: 'strftime (String Format Time).' },
      { id: 1004, type: 'trueFalse', question: 'time.sleep(5) pauses for 5 seconds.', correctAnswer: true, explanation: 'True.' },
      { id: 1005, type: 'trueFalse', question: 'Timestamp is usually seconds since 1970.', correctAnswer: true, explanation: 'True. Unix Epoch.' },
      { id: 1006, type: 'mcq', question: 'Parse string to date:', options: ['strftime', 'strptime', 'parse', 'convert'], correctAnswer: 1, explanation: 'strptime (String Parse Time).' },
      { id: 1007, type: 'mcq', question: 'Difference between two dates is a:', options: ['int', 'float', 'timedelta', 'string'], correctAnswer: 2, explanation: 'datetime.timedelta object.' },
      { id: 1008, type: 'mcq', question: 'Get current year:', options: ['now().year', 'now().y', 'year()', 'date.year'], correctAnswer: 0, explanation: 'datetime.now().year' },
      { id: 1009, type: 'trueFalse', question: 'Dates are mutable.', correctAnswer: false, explanation: 'False. datetime objects are immutable.' },
      { id: 1010, type: 'trueFalse', question: 'Timezone support is available.', correctAnswer: true, explanation: 'True.' },
      { id: 1011, type: 'mcq', question: 'ISO format code:', options: ['isoformat()', 'iso()', 'std()', 'str()'], correctAnswer: 0, explanation: 'date.isoformat().' },
      { id: 1012, type: 'mcq', question: 'Unix timestamp function:', options: ['time.time()', 'date.time()', 'now.time()', 'timestamp()'], correctAnswer: 0, explanation: 'time.time() returns float seconds.' },
      { id: 1013, type: 'trueFalse', question: 'datetime combines date and time.', correctAnswer: true, explanation: 'True.' },
      { id: 1014, type: 'trueFalse', question: '%Y represents 4-digit year.', correctAnswer: true, explanation: 'True.' },
      { id: 1015, type: 'trueFalse', question: 'Calendar module outputs calendars.', correctAnswer: true, explanation: 'True.' }
    ]
  },
  {
    id: 11,
    name: "Classes and Objects",
    description: "Creating classes, instances, attributes, methods, __init__",
    difficulty: "intermediate",
    questions: [
      { id: 1101, type: 'mcq', question: 'Keyword to define a class:', options: ['struct', 'class', 'object', 'def'], correctAnswer: 1, explanation: 'class MyClass:' },
      { id: 1102, type: 'mcq', question: 'Constructor method name:', options: ['__construct__', 'constructor', '__init__', 'init'], correctAnswer: 2, explanation: '__init__ initializes the object.' },
      { id: 1103, type: 'mcq', question: 'First parameter of instance methods:', options: ['this', 'self', 'me', 'it'], correctAnswer: 1, explanation: 'self refers to the instance (convention).' },
      { id: 1104, type: 'trueFalse', question: 'Python supports Object Oriented Programming.', correctAnswer: true, explanation: 'True.' },
      { id: 1105, type: 'trueFalse', question: 'self is a keyword in Python.', correctAnswer: false, explanation: 'False. It is just a naming convention, though strongly followed.' },
      { id: 1106, type: 'mcq', question: 'Create instance of class Dog:', options: ['new Dog()', 'Dog()', 'create Dog()', 'Dog.new()'], correctAnswer: 1, explanation: 'Just call the class like a function.' },
      { id: 1107, type: 'mcq', question: 'Access attribute x of obj:', options: ['obj->x', 'obj.x', 'obj[x]', 'obj::x'], correctAnswer: 1, explanation: 'Dot notation.' },
      { id: 1108, type: 'mcq', question: 'Variable shared by all instances:', options: ['Instance var', 'Class var', 'Global var', 'Local var'], correctAnswer: 1, explanation: 'Class variable.' },
      { id: 1109, type: 'trueFalse', question: 'You can add attributes to objects dynamically.', correctAnswer: true, explanation: 'True. obj.new_attr = 1 works.' },
      { id: 1110, type: 'trueFalse', question: '__str__ returns string representation.', correctAnswer: true, explanation: 'True.' },
      { id: 1111, type: 'mcq', question: 'Delete an object property:', options: ['remove', 'delete', 'del', 'erase'], correctAnswer: 2, explanation: 'del obj.prop' },
      { id: 1112, type: 'mcq', question: 'Method called when object is destroyed:', options: ['__del__', '__end__', 'destruct', 'finalize'], correctAnswer: 0, explanation: '__del__' },
      { id: 1113, type: 'trueFalse', question: 'Classes can be defined inside functions.', correctAnswer: true, explanation: 'True.' },
      { id: 1114, type: 'trueFalse', question: 'An empty class uses "pass".', correctAnswer: true, explanation: 'True.' },
      { id: 1115, type: 'trueFalse', question: 'You must define __init__.', correctAnswer: false, explanation: 'False. It is optional.' }
    ]
  },
  {
    id: 12,
    name: "Inheritance",
    description: "Parent/child classes, method overriding, super(), MRO",
    difficulty: "advanced",
    questions: [
      { id: 1201, type: 'mcq', question: 'Syntax for inheritance:', options: ['class Child(Parent):', 'class Child extends Parent:', 'class Child inherits Parent:', 'class Child : Parent'], correctAnswer: 0, explanation: 'Parentheses contain base classes.' },
      { id: 1202, type: 'mcq', question: 'Call parent method:', options: ['parent().method()', 'super().method()', 'base.method()', 'call.method()'], correctAnswer: 1, explanation: 'super() returns a proxy to the parent.' },
      { id: 1203, type: 'mcq', question: 'Check if obj is instance of class:', options: ['type()', 'isinstance()', 'isa()', 'check()'], correctAnswer: 1, explanation: 'isinstance(obj, Class)' },
      { id: 1204, type: 'trueFalse', question: 'Python supports multiple inheritance.', correctAnswer: true, explanation: 'True. class C(A, B):' },
      { id: 1205, type: 'trueFalse', question: 'All classes inherit from Object.', correctAnswer: true, explanation: 'True (in Python 3).' },
      { id: 1206, type: 'mcq', question: 'What is MRO?', options: ['Method Run Order', 'Method Resolution Order', 'Main Run Object', 'Memory Read Only'], correctAnswer: 1, explanation: 'Order in which base classes are searched.' },
      { id: 1207, type: 'mcq', question: 'Check if ClassA is subclass of ClassB:', options: ['issubclass()', 'isinstance()', 'checksub()', 'sub()'], correctAnswer: 0, explanation: 'issubclass(ClassA, ClassB)' },
      { id: 1208, type: 'mcq', question: 'Method overriding happens when:', options: ['Child defines same method name as Parent', 'Parent defines method', 'Never', 'Using keyword override'], correctAnswer: 0, explanation: 'Child method replaces parent method.' },
      { id: 1209, type: 'trueFalse', question: 'Private methods are inherited.', correctAnswer: false, explanation: 'False (strictly speaking via name mangling they are distinct, but conceptual access is restricted).' },
      { id: 1210, type: 'trueFalse', question: 'super() is mandatory in __init__.', correctAnswer: false, explanation: 'False, but necessary to initialize parent state.' },
      { id: 1211, type: 'mcq', question: 'How to access parent init?', options: ['super().__init__()', 'Parent.__init__()', 'Both', 'None'], correctAnswer: 2, explanation: 'Both work, but super() is preferred.' },
      { id: 1212, type: 'mcq', question: 'Mixins are:', options: ['Classes for multiple inheritance', 'Functions', 'Modules', 'Variables'], correctAnswer: 0, explanation: 'Classes used to add features to other classes.' },
      { id: 1213, type: 'trueFalse', question: 'Object class is the ultimate base.', correctAnswer: true, explanation: 'True.' },
      { id: 1214, type: 'trueFalse', question: 'You can prevent inheritance with "final".', correctAnswer: false, explanation: 'False. Python has no native final keyword.' },
      { id: 1215, type: 'trueFalse', question: 'Diamond problem is solved by MRO.', correctAnswer: true, explanation: 'True. C3 linearization.' }
    ]
  },
  {
    id: 13,
    name: "Polymorphism",
    description: "Single interface for different types, method overriding, duck typing",
    difficulty: "advanced",
    questions: [
      { id: 1301, type: 'mcq', question: 'What is polymorphism?', options: ['Multiple forms', 'Multiple classes', 'Multiple files', 'Multiple loops'], correctAnswer: 0, explanation: 'Ability of different objects to respond to same method.' },
      { id: 1302, type: 'mcq', question: 'Duck typing principle:', options: ['If it walks like a duck...', 'Types must be declared', 'Ducks are objects', 'Inheritance is required'], correctAnswer: 0, explanation: 'Check behavior/methods, not type.' },
      { id: 1303, type: 'mcq', question: 'Operator overloading uses:', options: ['Magic methods', 'Keywords', 'Macros', 'None'], correctAnswer: 0, explanation: 'e.g., __add__ for +' },
      { id: 1304, type: 'trueFalse', question: 'Polymorphism requires inheritance.', correctAnswer: false, explanation: 'False. Duck typing allows it without inheritance.' },
      { id: 1305, type: 'trueFalse', question: 'len() is polymorphic.', correctAnswer: true, explanation: 'True. Works on strings, lists, dicts.' },
      { id: 1306, type: 'mcq', question: 'Magic method for + operator:', options: ['__plus__', '__add__', '__sum__', '__op__'], correctAnswer: 1, explanation: '__add__' },
      { id: 1307, type: 'mcq', question: 'Magic method for ==:', options: ['__eq__', '__equals__', '__same__', '__is__'], correctAnswer: 0, explanation: '__eq__' },
      { id: 1308, type: 'mcq', question: 'Function overloading exists in Python?', options: ['Yes', 'No', 'Sort of'], correctAnswer: 1, explanation: 'No direct support (same name overwrites), use default args.' },
      { id: 1309, type: 'trueFalse', question: 'Interfaces are enforced strictly.', correctAnswer: false, explanation: 'False. Python uses protocols/ABCs.' },
      { id: 1310, type: 'trueFalse', question: 'Method overriding is a form of polymorphism.', correctAnswer: true, explanation: 'True.' },
      { id: 1311, type: 'mcq', question: 'len() calls which method?', options: ['__len__', '__length__', '__size__', 'size()'], correctAnswer: 0, explanation: 'obj.__len__()' },
      { id: 1312, type: 'mcq', question: 'str() calls:', options: ['__str__', '__tostring__', '__repr__', 'string()'], correctAnswer: 0, explanation: '__str__' },
      { id: 1313, type: 'trueFalse', question: 'You can add objects of different classes if defined.', correctAnswer: true, explanation: 'True via __add__.' },
      { id: 1314, type: 'trueFalse', question: 'Polymorphism makes code less flexible.', correctAnswer: false, explanation: 'False. More flexible.' },
      { id: 1315, type: 'trueFalse', question: '__repr__ is for developer representation.', correctAnswer: true, explanation: 'True.' }
    ]
  },
  {
    id: 14,
    name: "Encapsulation and Abstraction",
    description: "Private attributes, property decorators, abstract classes",
    difficulty: "advanced",
    questions: [
      { id: 1401, type: 'mcq', question: 'Prefix for private members:', options: ['_', '__', 'private', '-'], correctAnswer: 1, explanation: 'Double underscore __name causes name mangling.' },
      { id: 1402, type: 'mcq', question: 'Decorator for getter method:', options: ['@get', '@property', '@attr', '@getter'], correctAnswer: 1, explanation: '@property turns a method into an attribute.' },
      { id: 1403, type: 'mcq', question: 'Module for Abstract Base Classes:', options: ['abc', 'abstract', 'interface', 'base'], correctAnswer: 0, explanation: 'import abc' },
      { id: 1404, type: 'trueFalse', question: 'Python enforces strict privacy.', correctAnswer: false, explanation: 'False. It is advisory; name mangling makes it harder but not impossible.' },
      { id: 1405, type: 'trueFalse', question: 'Abstract classes cannot be instantiated.', correctAnswer: true, explanation: 'True.' },
      { id: 1406, type: 'mcq', question: 'Decorator for setter:', options: ['@name.setter', '@set', '@setter', '@prop.set'], correctAnswer: 0, explanation: '@propertyname.setter' },
      { id: 1407, type: 'mcq', question: 'Single underscore _name implies:', options: ['Private', 'Protected/Internal use', 'Public', 'System'], correctAnswer: 1, explanation: 'Convention for internal use.' },
      { id: 1408, type: 'mcq', question: 'Decorator for abstract method:', options: ['@abstractmethod', '@abstract', '@virtual', '@base'], correctAnswer: 0, explanation: 'from abc import abstractmethod' },
      { id: 1409, type: 'trueFalse', question: 'Encapsulation bundles data and methods.', correctAnswer: true, explanation: 'True.' },
      { id: 1410, type: 'trueFalse', question: 'You must use getters/setters in Python like Java.', correctAnswer: false, explanation: 'False. Use public attributes or @property.' },
      { id: 1411, type: 'mcq', question: 'Name mangling converts __x to:', options: ['_Class__x', '__Class_x', 'x', '_x'], correctAnswer: 0, explanation: '_ClassName__variable' },
      { id: 1412, type: 'mcq', question: 'Accessing __priv raises:', options: ['AttributeError', 'AccessError', 'PrivacyError', 'None'], correctAnswer: 0, explanation: 'Because the name is changed.' },
      { id: 1413, type: 'trueFalse', question: 'Abstraction hides implementation details.', correctAnswer: true, explanation: 'True.' },
      { id: 1414, type: 'trueFalse', question: 'Subclass must implement abstract methods.', correctAnswer: true, explanation: 'True, to be concrete.' },
      { id: 1415, type: 'trueFalse', question: 'Deleter decorator exists.', correctAnswer: true, explanation: 'True. @name.deleter' }
    ]
  },
  {
    id: 15,
    name: "Decorators",
    description: "Function decorators, class decorators, decorator syntax",
    difficulty: "advanced",
    questions: [
      { id: 1501, type: 'mcq', question: 'Symbol for decorator syntax:', options: ['#', '&', '@', '%'], correctAnswer: 2, explanation: '@decorator_name' },
      { id: 1502, type: 'mcq', question: 'A decorator is essentially a:', options: ['String', 'Function wrapping another function', 'Class only', 'Comment'], correctAnswer: 1, explanation: 'Higher-order function that takes and returns a function.' },
      { id: 1503, type: 'mcq', question: 'To preserve metadata of decorated function use:', options: ['@wraps', '@preserve', '@meta', '@keep'], correctAnswer: 0, explanation: 'functools.wraps' },
      { id: 1504, type: 'trueFalse', question: 'You can chain multiple decorators.', correctAnswer: true, explanation: 'True. Stack them.' },
      { id: 1505, type: 'trueFalse', question: 'Decorators run when function is called.', correctAnswer: false, explanation: 'False. They run at definition time.' },
      { id: 1506, type: 'mcq', question: 'Inner function in decorator usually calls:', options: ['Original function', 'Nothing', 'itself', 'main'], correctAnswer: 0, explanation: 'It wraps the original call.' },
      { id: 1507, type: 'mcq', question: 'Decorators can accept arguments:', options: ['Yes', 'No', 'Sometimes'], correctAnswer: 0, explanation: 'Yes, requires 3 levels of nested functions.' },
      { id: 1508, type: 'mcq', question: 'Class decorators take a ___ as argument:', options: ['Class', 'Function', 'Object', 'Method'], correctAnswer: 0, explanation: 'They modify classes.' },
      { id: 1509, type: 'trueFalse', question: '@staticmethod is a built-in decorator.', correctAnswer: true, explanation: 'True.' },
      { id: 1510, type: 'trueFalse', question: 'Decorators change function behavior.', correctAnswer: true, explanation: 'True.' },
      { id: 1511, type: 'mcq', question: 'First argument of method decorator inner function:', options: ['self', 'cls', 'args', 'any'], correctAnswer: 0, explanation: 'It receives self like a normal method.' },
      { id: 1512, type: 'mcq', question: 'Can classes be decorators?', options: ['Yes', 'No'], correctAnswer: 0, explanation: 'Yes, if they implement __call__.' },
      { id: 1513, type: 'trueFalse', question: 'Decorators replace the original function object.', correctAnswer: true, explanation: 'True.' },
      { id: 1514, type: 'trueFalse', question: '@classmethod is a decorator.', correctAnswer: true, explanation: 'True.' },
      { id: 1515, type: 'trueFalse', question: 'Decorators are unique to Python.', correctAnswer: false, explanation: 'False, but Python syntax is unique.' }
    ]
  },
  {
    id: 16,
    name: "Generators and Iterators",
    description: "yield keyword, iterator protocol, lazy evaluation",
    difficulty: "advanced",
    questions: [
      { id: 1601, type: 'mcq', question: 'Keyword to create a generator:', options: ['return', 'yield', 'gen', 'produce'], correctAnswer: 1, explanation: 'yield turns a function into a generator.' },
      { id: 1602, type: 'mcq', question: 'Get next item from iterator:', options: ['next()', 'iter()', 'get()', 'move()'], correctAnswer: 0, explanation: 'next(iterator)' },
      { id: 1603, type: 'mcq', question: 'Function to get iterator from object:', options: ['getiter()', 'iter()', 'loop()', 'start()'], correctAnswer: 1, explanation: 'iter(obj)' },
      { id: 1604, type: 'trueFalse', question: 'Generators compute values lazily.', correctAnswer: true, explanation: 'True. On demand.' },
      { id: 1605, type: 'trueFalse', question: 'Lists are iterators.', correctAnswer: false, explanation: 'False. They are iterable, but not iterators (need iter() called).' },
      { id: 1606, type: 'mcq', question: 'Generator expression syntax:', options: ['[x for x in y]', '(x for x in y)', '{x for x in y}', '<x for x in y>'], correctAnswer: 1, explanation: 'Parentheses () create a generator.' },
      { id: 1607, type: 'mcq', question: 'StopIteration exception indicates:', options: ['Error', 'End of iterator', 'Pause', 'Crash'], correctAnswer: 1, explanation: 'No more items.' },
      { id: 1608, type: 'mcq', question: 'Memory efficiency of generators vs lists:', options: ['Better', 'Worse', 'Same', 'None'], correctAnswer: 0, explanation: 'Generators yield one by one, saving memory.' },
      { id: 1609, type: 'trueFalse', question: 'A function can have both return and yield.', correctAnswer: true, explanation: 'True (in modern Python).' },
      { id: 1610, type: 'trueFalse', question: 'Iterator protocol requires __iter__ and __next__.', correctAnswer: true, explanation: 'True.' },
      { id: 1611, type: 'mcq', question: 'Can you index a generator gen[0]?', options: ['Yes', 'No'], correctAnswer: 1, explanation: 'No, must iterate.' },
      { id: 1612, type: 'mcq', question: 'yield from used for:', options: ['Delegating to sub-generator', 'Importing', 'Returning', 'Breaking'], correctAnswer: 0, explanation: 'Yields from another iterable.' },
      { id: 1613, type: 'trueFalse', question: 'Infinite generators are possible.', correctAnswer: true, explanation: 'True.' },
      { id: 1614, type: 'trueFalse', question: 'range() returns a list in Python 3.', correctAnswer: false, explanation: 'False. It returns an immutable sequence/iterable object.' },
      { id: 1615, type: 'trueFalse', question: 'for loops handle StopIteration automatically.', correctAnswer: true, explanation: 'True.' }
    ]
  },
  {
    id: 17,
    name: "Regular Expressions",
    description: "Pattern matching, re module, regex operations",
    difficulty: "advanced",
    questions: [
      { id: 1701, type: 'mcq', question: 'Module for regex:', options: ['regex', 're', 'match', 'pattern'], correctAnswer: 1, explanation: 'import re' },
      { id: 1702, type: 'mcq', question: 'Character representing any character:', options: ['*', '.', '?', '#'], correctAnswer: 1, explanation: 'Dot .' },
      { id: 1703, type: 'mcq', question: 'Start of string anchor:', options: ['^', '$', '<', 'A'], correctAnswer: 0, explanation: '^ matches start.' },
      { id: 1704, type: 'trueFalse', question: 're.match checks only start of string.', correctAnswer: true, explanation: 'True. re.search checks anywhere.' },
      { id: 1705, type: 'trueFalse', question: '\d matches digits.', correctAnswer: true, explanation: 'True.' },
      { id: 1706, type: 'mcq', question: 'Function to find all occurrences:', options: ['findall', 'searchall', 'matchall', 'getall'], correctAnswer: 0, explanation: 're.findall()' },
      { id: 1707, type: 'mcq', question: 'Quantifier for 0 or more:', options: ['+', '*', '?', '!'], correctAnswer: 1, explanation: '*' },
      { id: 1708, type: 'mcq', question: 'Quantifier for 1 or more:', options: ['+', '*', '?', '!'], correctAnswer: 0, explanation: '+' },
      { id: 1709, type: 'trueFalse', question: '[a-z] matches lowercase letters.', correctAnswer: true, explanation: 'True.' },
      { id: 1710, type: 'trueFalse', question: 're.sub replaces patterns.', correctAnswer: true, explanation: 'True.' },
      { id: 1711, type: 'mcq', question: 'End of string anchor:', options: ['^', '$', '>', 'Z'], correctAnswer: 1, explanation: '$' },
      { id: 1712, type: 'mcq', question: 'Escape character:', options: ['/', '\\', '%', '!'], correctAnswer: 1, explanation: 'Backslash \\' },
      { id: 1713, type: 'trueFalse', question: 'Groups are created with ().', correctAnswer: true, explanation: 'True.' },
      { id: 1714, type: 'trueFalse', question: 'Raw strings r"..." are used for regex.', correctAnswer: true, explanation: 'True, to avoid escaping backslashes.' },
      { id: 1715, type: 'trueFalse', question: '\s matches whitespace.', correctAnswer: true, explanation: 'True.' }
    ]
  }
];

export default quizData;