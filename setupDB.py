from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, Float, Date, String, VARCHAR
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import csv
import pandas as pd

# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
# db = SQLAlchemy(app)

Base = declarative_base()


class Conferencedb(Base):
    __tablename__ = 'womenInTechResources'
    __table_args__ = {'sqlite_autoincrement': True}

    id = Column(Integer, primary_key=True, nullable=False)
    name = Column(VARCHAR(40))
    year = Column(Integer)
    month = Column(VARCHAR)
    start_date = Column(VARCHAR)
    link = Column(VARCHAR)
    conference = Column(VARCHAR)
    mentoring = Column(VARCHAR)
    fellowship_scholarship = Column(VARCHAR)
    hackathon = Column(VARCHAR)
    financial_support = Column(VARCHAR)
    poc = Column(VARCHAR)
    lgbtq = Column(VARCHAR)
    asian = Column(VARCHAR)
    black = Column(VARCHAR)
    latinX = Column(VARCHAR)
    firstgen = Column(VARCHAR)

if __name__ == '__main__':
    engine = create_engine('sqlite:////tmp/test.db')
    Base.metadata.create_all(engine)
    file_name = 'womenInTechConferences.csv'
    df = pd.read_csv(file_name)
    df.to_sql(name = Conferencedb.__tablename__, con=engine, index_label='id', if_exists='replace')
    print(engine.execute("SELECT * FROM womenInTechResources").fetchall())



# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
# db = SQLAlchemy(app)
#
# class Conference(db.Model):
#     id = db.Column('student_id', db.Integer, primary_key=True)
#     name = db.Column(db.String(100))
#     city = db.Column(db.String(50))
#     addr = db.Column(db.String(200))
#     pin = db.Column(db.String(10))
#
# def __init__(self, name, city, addr,pin):
#    self.name = name
#    self.city = city
#    self.addr = addr
#    self.pin = pin
#
#
# db.create_all()


# from flask_sqlalchemy import SQLAlchemy as fsqla
#
# Base = fsqla.declarative_base()
#
# class Conferences(Base):
#     # assign table names
#     __tablename__ = 'Women in Tech Conferences'
#     __table_args__ = {'sqlite_autoincrement': True}

# import gspread
# from oauth2client.service_account import ServiceAccountCredentials
#
# scope = ["https://spreadsheets.google.com/feeds​", "https://www.googleapis.com/auth/spreadsheets​","https://www.googleapis.com/auth/drive.file​","https://www.googleapis.com/auth/drive​"]
# creds = ServiceAccountCredentials.from_json_keyfile_name("creds.json", scope)
# client = gspread.authorize(creds)
# sheet = client.open("Women").sheet1








