FROM python:3.11-slim 


WORKDIR /app

COPY backend/requirements.txt .
RUN pip install -r requirements.txt

COPY backend/ .

RUN python3 manage.py collectstatic --no-input
RUN python3 manage.py migrate

CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]
