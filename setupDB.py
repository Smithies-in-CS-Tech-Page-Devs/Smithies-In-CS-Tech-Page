# from flask import Flask
# from flask_sqlalchemy import SQLAlchemy as fsqla

# Base = fsqla.declarative_base()
#
# class Conferences(Base):
#     # assign table names
#     __tablename__ = 'Women in Tech Conferences'
#     __table_args__ = {'sqlite_autoincrement': True}

import gspread
from oauth2client.service_account import ServiceAccountCredentials

scope = ["https://spreadsheets.google.com/feeds​", "https://www.googleapis.com/auth/spreadsheets​","https://www.googleapis.com/auth/drive.file​","https://www.googleapis.com/auth/drive​"]
creds = ServiceAccountCredentials.from_json_keyfile_name("creds.json", scope)
client = gspread.authorize(creds)
sheet = client.open("Women").sheet1








