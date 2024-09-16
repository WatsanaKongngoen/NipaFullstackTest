from os import getenv
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')

load_dotenv(dotenv_path)

MONGODB_URI = str(getenv("MONGODB_URI"))
DATABASE_NAME = str(getenv("DATABASE_NAME"))