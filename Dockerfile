# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file into the container
COPY build/libs/ticketing-boot-0.0.1-SNAPSHOT.jar app.jar

# Expose the port the app runs on
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]

# docker build -t siha159159/sjh-ticketing .
# docker push siha159159/sjh-ticketing
# sudo docker run -itd --name sjh-ticketing -p 8080:8080 siha159159/sjh-ticketing