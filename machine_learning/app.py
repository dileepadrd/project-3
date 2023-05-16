import sys
from flask import Flask, request, render_template

print(sys.path)
sys.path.append("C:/Users/keito/uoft_fintech/project-3/machine_learning")
print(sys.path)

try:
    from time_calc import estimate_time_calculator
except ImportError as e:
    print("Error importing:", e)

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        address_from = request.form['from']
        address_to = request.form['to']
        time = estimate_time_calculator(address_from, address_to)
        if time is None:
            return "Could not find one of the addresses", 400
        else:
            time_str = f"The estimated travel time is {time[0]:.2f} minutes."
            return render_template('result.html', message=time_str)
    else:
        return render_template('form.html')

if __name__ == '__main__':
    app.run()
