function Student(name, std, gender, age, city, mark) {
            this.name = name;
            this.std = std;
            this.gender = gender;
            this.age = age;
            this.city = city;
            this.mark = mark;
        }

        // Creating student objects
        const student1 = new Student("Adam", "8th", "male", 13, "Chennai", 85);
        const student2 = new Student("Melody", "10th", "female", 15, "Mumbai", 92);
        const student3 = new Student("Bob", "7th", "male", 12, "Delhi", 77);
        const student4 = new Student("Teena", "8th", "female", 14, "Ranchi", 95);

        // Store students in an array
        const students = [student1, student2, student3, student4];

        // Show student details based on name
        function showStudent() {
            const nameInput = document.getElementById("studentInput").value;
            const detailDiv = document.getElementById("studentDetails");

            // Find the student object by name
            const found = students.find(student => student.name.toLowerCase() === nameInput.toLowerCase());

            // Show result
            if (found) {
                detailDiv.innerHTML = `
                    <table>
                        <tr><th>Name</th><td>${found.name}</td></tr>
                        <tr><th>Standard</th><td>${found.std}</td></tr>
                        <tr><th>Gender</th><td>${found.gender}</td></tr>
                        <tr><th>Age</th><td>${found.age}</td></tr>
                        <tr><th>City</th><td>${found.city}</td></tr>
                        <tr><th>Mark</th><td>${found.mark}</td></tr>
                    </table>`;
            } else {
                detailDiv.innerHTML = `<p style="color: red;">Student not found. Please enter a valid name.</p>`;
            }
        }