from urllib import response
import psutil
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin


app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/stats')
def stats():
    cpu = psutil.cpu_percent()
    cpucount = psutil.cpu_count()
    ram = psutil.virtual_memory().percent
    diskusage = psutil.disk_usage("/").used
    totaldisk = psutil.disk_usage("/").total
    freedisk = psutil.disk_usage("/").free
    percentdisk = psutil.disk_usage("/").percent
    response = jsonify({"ram": ram, "cpu": cpu , "cpucount": cpucount, "diskusage": diskusage, "totaldisk": totaldisk, "freedisk": freedisk, "percentdisk": percentdisk})
    return response 
    


