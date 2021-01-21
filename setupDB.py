from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, Float, Date, String, VARCHAR
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
import pandas as pd

# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
# db = SQLAlchemy(app)

Base = declarative_base()


class ConferenceDB(Base):
    __tablename__ = 'womenInTechResources'
    #__table_args__ = {'sqlite_autoincrement': True}

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
    df.to_sql(name = ConferenceDB.__tablename__, con=engine, index_label='id', if_exists='replace')
    print(engine.execute("SELECT * FROM womenInTechResources").fetchall())











