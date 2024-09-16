from dbconnector.mongo_connector import MongoConnector
from flask import Flask, request, jsonify
from datetime import datetime
import json

db = MongoConnector.connect()


class TicketService:


    @staticmethod
    # Function to create a new ticket
    def create_ticket(title, description, contact_information):

        ticket = {
            "title": title,
            "description": description,
            "contact_information": contact_information,
            "created_timestamp": datetime.now().isoformat(),
            "update_timestamp": datetime.now().isoformat()
        }

        db.ticket.insert_one(ticket)
        return ticket
    
    @staticmethod
    def update_ticket(title, status):
        try:
            data = list(db.ticket.find({"title": title}))
            if data:
                ticket = {"update_timestamp": datetime.now().isoformat(),
                          "status"          : status}
                db.ticket.update_many({"title": title},{'$set': ticket}, upsert=True)
                response = {"message" : "Update Ticket Success"}
            else:
                response = {"message" : "Not Found Ticket"}

            return response
        except Exception as E:
            print("Error in function update ticket : ", E)


    @staticmethod
    def get_tickets(filter_status, sort_by):
        try:
            print(filter_status, " : ", sort_by)
            tickets = list(db.ticket.find({},{'_id': 0}))
            if filter_status:
                tickets = [ticket for ticket in tickets if ticket['status'] == filter_status]
  
            tickets.sort(key=lambda x: x.get(sort_by, ''), reverse=True) 
            response = {'data' : tickets}
            r = json.dumps(response)
            loaded_r = json.loads(r)
            return jsonify(loaded_r)
        except Exception as E:
            print("E : ", E)
            response = {'data' : "NOT SUCCESS"}
            return jsonify(response)