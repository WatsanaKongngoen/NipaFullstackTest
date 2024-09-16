from flask import Blueprint, request
from services.ticket_service import TicketService

ticket_api = Blueprint("ticket_api", __name__)


@ticket_api.route('/tickets', methods=['GET'])
def get_tickets():
    filter_status = request.args.get('status')
    sort_by = request.args.get('sort_by', 'update_timestamp')
    return TicketService.get_tickets(filter_status, sort_by)


@ticket_api.route('/tickets', methods=['POST'])
def create_ticket():
    jsondata            = request.get_json()
    title               = jsondata['title']
    description         = jsondata['description']
    contact_information = jsondata['contact_information']
    return TicketService.create_ticket(title, description, contact_information)

@ticket_api.route('/tickets/<ticket_id>', methods=['PUT'])
def update_ticket(ticket_id):
    jsondata       = request.get_json()
    title          = jsondata['title']
    status         = jsondata['status']
    return TicketService.update_ticket(title, status)

