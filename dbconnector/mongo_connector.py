# import settings as ENV
from utils.singleton_template import Singleton
from pymongo import MongoClient
import settings as ENV


class MongoConnector(metaclass=Singleton):
	client = MongoClient(ENV.MONGODB_URI)
	cl = client[ENV.DATABASE_NAME]

	@classmethod
	def connect(cls) -> MongoClient:
		return cls.cl

	@classmethod
	def connect_log(cls) -> MongoClient:
		return cls.cl_log

	@classmethod
	def disconnect(cls):
		return cls.client.close()



