# Reikia sukurti paprasta CRUD

1. Užduotis sukurti express serverį

2. Pavyzdys json file `data/students.json` galite ir savo naudoti, nebūtinai students:

    ```json
    [

        {
        "id": 1,
        "name": "Jonas Jonaitis",
        "age": 21,
        "program": "Computer Science"
        },
        {
        "id": 2,
        "name": "Petras Petraitis",
        "age": 23,
        "program": "Mathematics"
        }
    ]
    ```

3. Prašyti paprastas užklausas

    - `GET` `/students` – Grąžina visų studentų sąrašą.
    - `GET` `/students/:id` – Grąžina studentą pagal unikalų ID.
    - `POST` `/students` – Prideda naują studentą.
    - `PUT` `/students/:id` – Atnaujina studento duomenis.
    - `DELETE` `/students/:id` – Ištrina studentą.
    - `GET` `/students/sorted-by-age?sort=[asc || desc]` – Grąžina visų studentų sąrašą, surūšiuotą pagal amžių asc arba desc.
    - `GET` `/students/search?name=Jonas` – Grąžina studentus, pagal varda.
    - `GET` `/students/paginated?page=1&limit=n` – Grąžina pirmą puslapį su `n` studentų.
    - `GET` `/students/filter-by-course?program=Mathematics` – Grąžina studentus, pagal programą.

4. Perašyti struktūra mūsų appliakcijos tai reikia sukurti folder `routes` du files
    - `index.mjs` jame bus visi jūsų resource keliai importuoti;
    - `studentsRoutes.mjs` tai bus jūsų visi methodai HTTP `Router()` kur bus naudojami jūsų endpoints;

5. Sukurti reikia jums folder `middleware`, `errorHandling.mjs` file kuriame bus status code implementuoti `500`

6. Pabandykite implementuoti logger naudojant Winston, kad būtų išsaugoti logai file logger.txt
