# MTA Datathon 2025 Project

This project analyzes ACE (Automated Camera Enforcement) violations in Manhattan’s Central Business District to study the effects of congestion pricing on bus lane violations.

## Dataset

The main dataset for this project was queried and exported from the MTA’s ACE Violations dataset on NYC Open Data:  
- Original dataset link: [ACE Violations Dataset](https://data.ny.gov/Transportation/MTA-Bus-Automated-Camera-Enforcement-Violations-Be/kh8p-hcbm/about_data)

### Query used to generate `ACE_Violations_Jan-Aug2023.csv`:
- Set **First Occurrence** between `"2023 Jan 01 12:00:00 AM"` and `"2023 Jun 30 11:45:00 PM"`  
- Set **Violation Status** to `"VIOLATION ISSUED"`

> **Note:** For this project the CSV is **not included** in this repository due to size, but you can recreate it by querying the original dataset. Place the CSV in the `Datasets/` folder.

## Folder Structure
