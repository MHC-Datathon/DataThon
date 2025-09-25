# MTA Datathon 2025 Project

This project analyzes ACE (Automated Camera Enforcement) violations in Manhattan’s Central Business District to study the effects of congestion pricing on bus lane violations.

## How to Run the Jupyter Notebook Files

This project contains two Jupyter notebooks:  
- `PreConjestionDataVis.ipynb`  
- `PostConjestionDataVis.ipynb`  

> **Important:** Place the CSV dataset files in the `Datasets/` folder before running the notebooks.

### Option 1: Using Conda (Recommended)

1. Install [Anaconda](https://www.anaconda.com/) or [Miniconda](https://docs.conda.io/en/latest/miniconda.html) if not already installed.  
2. Open a terminal/command prompt and navigate to the project folder:
   ```bash
   cd path/to/Datathon_Project
   ```
3. Create the Conda environment from the environment.yml file
    ```bash
    conda env create -f environment.yml
    ```
4. Activate the environment:
    ```bash
    conda activate datathon_project
    ```
5. Launch Jupyter Notebook:
    ```bash
    jupyter notebook
    ```
6. In the browser, open the notebook you want (PreConjestionDataVis.ipynb or PostConjestionDataVis.ipynb) and run the cells with Shift + Enter.


### Option 2: Using pip / Virtual Environment

1. Make sure Python is installed on your system.  
2. Open a terminal/command prompt and navigate to the project folder:
   ```bash
   cd path/to/Datathon_Project
   ```
3. Create a virtual environment:
    ```bash
    python -m venv venv
    ```
4. Activate the virtual environment:
    ***macOS/Linux:***
    ```bash
    source venv/bin/activate
    ```
    ***Windows:***
    ```bash
    venv\Scripts\activate
    ```
5. Install dependencies from requirements.txt:
    ```bash
    pip install -r requirements.txt
    ```
6. Launch Jupter Notebook:
    ```bash
    jupyter notebook
    ```
7. Open the desired notebook (PreConjestionDataVis.ipynb or PostConjestionDataVis.ipynb) in the browser and run the cells sequentially with Shift + Enter.

# Run the website
- Locate the main HTML file called index.html, and double click or right click and open with your browser choice
- OR open with Live Server

## Dataset

The main dataset for this project was queried and exported from the MTA’s ACE Violations dataset on NYC Open Data:  
- Original dataset link: [ACE Violations Dataset](https://data.ny.gov/Transportation/MTA-Bus-Automated-Camera-Enforcement-Violations-Be/kh8p-hcbm/about_data)

### Query used to generate `ACE_Violations_PreConj.csv`:
- Set **First Occurrence** between `"2024 Jun 20 12:00:00 AM"` and `"2024 Sep 10 11:45:00 PM"`  
- Set **Violation Status** to `"VIOLATION ISSUED"`

### Query used to generate `ACE_Violations_PostConj.csv`:
- Set **First Occurrence** between `"2025 Jun 20 12:00:00 AM"` and `"2025 Sep 10 11:45:00 PM"`  
- Set **Violation Status** to `"VIOLATION ISSUED"`

> **Note:** For this project the CSV is **not included** in this repository due to size, but you can recreate it by querying the original dataset. Place the CSV in the `Datasets/` folder.

## Contributors

This project was developed by the following contributors:

- [John Ortega](https://www.linkedin.com/in/john-ortega-b158072a9/)  
- [Giovanni Carrion](https://www.linkedin.com/in/giovannicarrion/)  
- [Kevin Ye](https://www.linkedin.com/in/kevinye7/)  
- [Shreyosee Chowdhurry](https://www.linkedin.com/in/shreyosee25/)