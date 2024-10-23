
# Simple Dj Ango-PWA Application

### This is a simple django project that uses service workers to catch static files so the user can see them offline

***

## Requirements

#### Python

> - You'll need to have [Python](https://www.python.org/downloads/) installed. <br>
>    You can check if u have it installed with:
>
> ```bash
>python3 --version
> ```
>
> Or if you're on windows:
>
> ```powershell
>python --version
> ```
>

#### Pip

> - Set [pip](https://pypi.org/project/pip/) in your environment variables. <br>
>    You can also check with a:
>
> ```bash
>pip3 --version
> ```
> Or if you're on windows:
>
> ```powershell
>pip --version
> ```

## Setup

1.- Clone the repository:

```bash
git clone https://github.com/DiegoB0/django_pwa.git
cd django_pwa
```

2.- Create a virtual environment

  - On Windows:
```cmd
python -m venv myvenv
```

  - On Linux
```bash
python3 -m venv myvenv
```

3.- Activate the virtual environment

  - On Windows:
  ```cmd
myvenv\Scripts\activate
  ```

  - On Linux
  ```bash
source myvenv/bin/activate
  ```

4.- Install the dependencies

```bash
pip install -r requirements.txt
```

5.- Enter the myproject directory/folder


```bash
cd myproject
```

6.- Run the migrations

```bash
python manage.py migrate
```

7.- Run the server

```bash
python manage.py runserver
```
